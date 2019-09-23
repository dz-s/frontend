import React from "react";
import * as S from "./App.styled";
import Player from "./Player";
import Controls from "./Controls";
import axios from "axios";
import Utils from "./utils";

interface State {
  playing: boolean;
  looping: boolean;

  board: string;
  playlist: Array<{ source: string; name: string; poster: string }>;
  cursor: number;
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      playing: false,
      looping: true,
      board: "b",
      playlist: [],
      cursor: 0
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

  async fetchPlaylist() {
    const BASE = `https://one.karasique.io/0/${this.state.board}`;

    const threads = (await axios.get(BASE)).data;

    const promisedPosts = threads
      .map((x: { id: string; }) =>
        axios
          .get(`${BASE}/${x.id}`)
          .then(
            (v) => {
              return {value: v.data, status: 1}
            },
            (e) => {
              return {e: e, status: 0}
            }
          )
      );

    const files = (await Promise.all(promisedPosts))
      .filter((x: any) => x.status === 1 && x.value.posts.length > 0)
      .flatMap((x: any) => x.value.posts)
      .filter(x =>
        !x.content.includes("FAP") &&
        !x.content.includes("ФАП") &&
        !x.content.includes("ТРАП")
      )
      .flatMap((x: any) => x.files);

    return files
      .filter((x: any) => x.kind === "video")
      .map((x: any) => {
          return {
            source: x.full,
            name: x.name,
            poster: x.thumbnail
          }
        }
      );
  }

  async setPlaylist() {
    this.setState({playlist: []});

    const playlist = await this.fetchPlaylist();

    this.setState({
      playlist: Utils.shuffle(playlist),
      cursor: 0
    });
  }

  async componentDidUpdate(_: any, prevState: Readonly<State>) {
    if (this.state.board === prevState.board)
      return;

    await this.setPlaylist();
  }

  async componentDidMount() {
    await this.setPlaylist();
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
          source={video.source}
          name={video.name}
          poster={video.poster}
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
