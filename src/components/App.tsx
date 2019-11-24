import React from "react";
import * as S from "./App.styled";
import Player from "./Player";
import Controls from "./Controls";
import Loader from "./Loader"
import { BOARDS } from "../config";
import { fetchThreads } from "../api";
interface State {
  playing: boolean;
  looping: boolean;

  board: string;

  threads: Array<any>;
  threadsCursor: number;

  playlist: Array<File>;
  playlistCursor: number;
  watched: number;

  isIOS: boolean;
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      playing: false,
      looping: true,

      board: BOARDS[0],

      threads: [],
      threadsCursor: 0,

      playlist: [],
      playlistCursor: 0,
      watched: 1,

      isIOS: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
    };

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e: KeyboardEvent) {
    if ((e.target! as HTMLElement).tagName === "VIDEO")
      return;

    switch (e.code) {
      case "ArrowLeft":
        this.moveCursor(-1);
        break;
      case "ArrowRight":
        this.moveCursor(1);
        break;
      case "Space":
        this.state.playing ? this.onPause() : this.onPlay();
        break;
    }
  }

  onPlay = () => {
    this.setState({ playing: true });
  }

  onPause = () => {
    this.setState({ playing: false });
  }

  moveCursor = (delta: number) => {
    const { cursor: currCursor, playlist } = this.state;
    const cursor = currCursor + delta;

    if (cursor < 0 || cursor >= playlist.length)
      return;

    this.setState({ cursor });
  }

  toggleLoop = () => {
    this.setState({ looping: !this.state.looping })
  }

  async fetchPlaylist(board: string) {

    const threads = await fetchThreads(board)

    let files = threads
      .filter((x: any) => x.posts.length)
      .flatMap((x: any) => x.posts)
      .flatMap((x: any) => x.files)
      .filter((x: any) => x.kind === "video");

    if (this.state.isIOS)
      files = files.filter((x: any) => x.full.endsWith("mp4"));

    return files.map((x: any) => {
      return {
        source: x.full,
        name: x.name,
        poster: x.thumbnail,
        size: 0,
      }
    }
    );
  }

  async componentDidUpdate(_: any, prevState: State) {
    if (prevState.board === this.state.board)
      return;

    this.setState({ playlist: [] });
    this.setState({
      playlist: await this.fetchPlaylist(this.state.board),
      cursor: 0
    });
  }

  render() {
    const { playlist, cursor, playing, looping, board: stateBoard } = this.state;
    const video = playlist[cursor];

    if (!video)
      return <Loader />;

    return (
      <S.AppStyle>
        {
          BOARDS.map(board => {
            return (
              <S.AppTextStyle key={board}>
                <span
                  onClick={() => this.setState({ board: board })}
                  style={{ color: stateBoard === board ? "hotpink" : "orange" }}
                >
                  {`/${board}/`}
                </span>
              </S.AppTextStyle>
            )
          }
          )
        }

        <Player
          media={video}
          playing={playing}
          looping={looping}
          onPlay={this.onPlay}
          onPause={this.onPause}
          moveCursor={this.moveCursor}
        />

        <Controls
          source={video.source}
          playing={playing}
          looping={looping}
          moveCursor={this.moveCursor}
          toggleLoop={this.toggleLoop}
        />

      </S.AppStyle>
    );
  }
}

export default App;