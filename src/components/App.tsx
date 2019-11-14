import React from "react";
import shuffle from "@tinkoff/utils/array/shuffle";
import * as S from "./App.styled";
import Player from "./Player";
import Controls from "./Controls";
import Media from "../entities/media";

interface State {
  playing: boolean;
  looping: boolean;

  board: string;
  playlist: Array<Media>;
  cursor: number;
  isIOS: boolean;
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      playing: false,
      looping: true,
      board: "b",
      playlist: [],
      cursor: 0,
      isIOS: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
    };

    document.addEventListener("keydown", this.handleKeyDown.bind(this));

    this.fetchPlaylist(this.state.board)
      .then(playlist => {
        this.setState({
          playlist: playlist,
          cursor: 0
        });
      });
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

  onPlay() {
    this.setState({playing: true});
  }

  onPause() {
    this.setState({playing: false});
  }

  moveCursor(delta: number) {
    const cursor = this.state.cursor + delta;

    if (cursor < 0 || cursor >= this.state.playlist.length)
      return;

    this.setState({cursor: cursor});
  }

  toggleLoop() {
    this.setState({looping: !this.state.looping})
  }

  async fetchPlaylist(board: string) {
    const BASE = `https://cors.x7.workers.dev/https://one.karasique.io/0/${board}`;

    const threads = await fetch(BASE)
      .then(x => x.json())
      .then(x => x.hasOwnProperty("error") ? [] : x);

    const replies = await Promise.all(
      threads
        .filter((thread: any) =>
          ["ФАП", "АФГ", "FAP", "ТРАП", "TRAP"]
            .every(x => !thread.content.includes(x))
        )
        .map((thread: any) =>
          fetch(`${BASE}/${thread.id}`)
            .then(x => x.json())
            .then(x => x.hasOwnProperty("error") ? {posts: []} : x)
        )
    );

    let files = replies
      .filter((x: any) => x.posts.length)
      .flatMap((x: any) => x.posts)
      .flatMap((x: any) => x.files)
      .filter((x: any) => x.kind === "video");

    if (this.state.isIOS)
      files = files.filter((x: any) => x.full.endsWith("mp4"));

    return shuffle(files.map((x: any) => {
        return {
          source: x.full,
          name: x.name,
          poster: x.thumbnail,
          size: 0,
        }
      }
    ));
  }

  async componentDidUpdate(_: any, prevState: State) {
    if (prevState.board === this.state.board)
      return;

    this.setState({playlist: []});
    this.setState({
      playlist: await this.fetchPlaylist(this.state.board),
      cursor: 0
    });
  }

  render() {
    const {playlist, cursor} = this.state;
    const video = playlist[cursor];

    if (!video)
      return "Loading...";

    return (
      <S.AppStyle>
        {
          ["b", "mu", "mov", "vg"].map(board => {
              return (
                <S.AppTextStyle key={board}>
                  <span
                    onClick={() => this.setState({board: board})}
                    style={{color: this.state.board === board ? "hotpink" : "orange"}}
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
          playing={this.state.playing}
          looping={this.state.looping}
          onPlay={this.onPlay.bind(this)}
          onPause={this.onPause.bind(this)}
          moveCursor={this.moveCursor.bind(this)}
        />

        <Controls
          source={video.source}
          playing={this.state.playing}
          looping={this.state.looping}
          moveCursor={this.moveCursor.bind(this)}
          toggleLoop={this.toggleLoop.bind(this)}
        />
      </S.AppStyle>
    );
  }
}

export default App;