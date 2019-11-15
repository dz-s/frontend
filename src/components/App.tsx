import React from "react";
import shuffle from "@tinkoff/utils/array/shuffle";
import * as S from "./App.styled";
import Player from "./Player";
import Controls from "./Controls";
import File from "../entities/file";
import Thread from "../entities/thread";

const CORS = "https://cors.x7.workers.dev";
const BASE = "https://one.karasique.io";
const DEFAULT_BOARD = "b";

interface State {
  playing: boolean;
  looping: boolean;

  board: string;

  threads: Array<Thread>;
  threadsCursor: number;

  playlist: Array<File>;
  playlistCursor: number;

  isIOS: boolean;
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      playing: false,
      looping: true,

      board: DEFAULT_BOARD,

      threads: [],
      threadsCursor: 0,

      playlist: [],
      playlistCursor: 0,

      isIOS: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
    };

    document.addEventListener("keydown", this.handleKeyDown.bind(this));

    this.fetchThreads(this.state.board)
      .then(threads => {
        this.setState({threads: threads});
        return this.continuousPreload();
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
    const cursor = this.state.playlistCursor + delta;

    if (cursor < 0 || cursor >= this.state.playlist.length)
      return;

    this.setState({playlistCursor: cursor});
  }

  toggleLoop() {
    this.setState({looping: !this.state.looping})
  }

  async fetchThreads(board: string): Promise<Array<Thread>> {
    return await fetch(`${CORS}/${BASE}/0/${board}`)
      .then(x => x.json())
      .then(x => x.hasOwnProperty("error") ? [] : x)
      .then(x => x.map((thread: any) => new Thread(thread.id)));
  }

  async fetchFiles(board: string, thread: Thread): Promise<Array<File>> {
    const replies = await fetch(`${CORS}/${BASE}/0/${board}/${thread.id}`)
      .then(x => x.json())
      .then(x => x.hasOwnProperty("error") ? [] : x.posts);

    return replies
      .flatMap((post: any) => post.files.map((file: any) => new File(file.full, file.thumbnail, file.kind, file.name)))
      .filter((file: File) => file.kind === "video")
      .filter((file: File) => this.state.isIOS ? file.full.endsWith("mp4") : true);
  }

  async continuousPreload() {
    while (this.state.threadsCursor < this.state.threads.length) {
      console.log(this.state.playlist.length);

      const thread = this.state.threads[this.state.threadsCursor];
      const files = await this.fetchFiles(this.state.board, thread);

      this.setState({
        playlist: [...this.state.playlist, ...shuffle(files)],
        threadsCursor: this.state.threadsCursor + 1
      });

      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  async componentDidUpdate(_: any, prevState: State) {
    if (prevState.board === this.state.board)
      return;

    this.fetchThreads(this.state.board)
      .then(threads =>
        this.setState({
          playlist: [],
          playlistCursor: 0,
          threads: threads,
          threadsCursor: 0,
        })
      );
  }

  render() {
    const {playlist, playlistCursor} = this.state;
    const video = playlist[playlistCursor];

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
          source={video.full}
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