import React from "react";
import * as S from "./App.styled";
import Player from "./Player";
import Controls from "./Controls";
import axios from "axios";

interface Props {
}

interface State {
    playing: boolean;
    looping: boolean;

    playlist: Array<{ source: string; name: string; poster: string }>;
    cursor: number;
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            playing: false,
            looping: true,
            playlist: [],
            cursor: 0
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

    shuffle<T>(arr: Array<T>): Array<T> {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    async componentDidMount() {
        let PROXY: string = "";
        if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
            PROXY = "https://cors-anywhere.herokuapp.com/";
        }
        const BASE = `https://one.karasique.io/0/b`;

        const threads = (await axios.get(`${PROXY}${BASE}`)).data;

        const promisedPosts = threads
            .slice(0, 29)
            .map((x: { id: string; }) =>
                axios
                    .get(`${PROXY}${BASE}/${x.id}`)
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
            .filter((x: any) => x.status === 1)
            .flatMap((x: any) => x.value.posts.map((y: any) => y.files))
            .flat();

        const playlist = files
            .filter((x: any) => x.kind === "video")
            .map((x: any) => {
                    return {
                        source: x.full,
                        name: x.name,
                        poster: x.thumbnail
                    }
                }
            );

        this.setState({
            playlist: this.shuffle(playlist)
        })
    }

    render() {
        const {playlist, cursor} = this.state;
        const video = playlist[cursor];
        if (!video)
            return (
                "Loading..."
            );

        return (
            <S.AppStyle>
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
                    moveCursor={this.moveCursor.bind(this)}
                    toggleLoop={this.toggleLoop.bind(this)}
                />
            </S.AppStyle>
        );
    }
}


export default App;
