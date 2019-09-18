import React from "react";
import * as S from "./Player.styled";

interface Props {
  source: string;
  name: string;
  poster: string;

  playing: boolean;
  looping: boolean;

  onPlay: Function;
  onPause: Function;
  moveCursor: Function;
}

interface State {
  autoplay: boolean;
}

class Player extends React.Component<Props, State> {
  ref: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);

    this.ref = React.createRef<HTMLVideoElement>();

    this.state = {
      autoplay: false
    };

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        this.props.moveCursor(-1);
        break;
      case "ArrowRight":
        this.props.moveCursor(1);
        break;
      case "Space":
        this.props.playing ? this.props.onPause() : this.props.onPlay();
        break;
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    const node = this.ref.current;
    if (node)
      this.props.playing ? node.play() : node.pause();

    if (this.props.playing && !this.state.autoplay)
      this.setState({autoplay: true});
  }

  render() {
    return (
      <S.PlayerStyle>
        <video
          playsInline={true}
          ref={this.ref}
          key={this.props.source}
          controls={true}
          autoPlay={this.state.autoplay}
          loop={this.props.looping}
          muted={false}
          preload={"auto"}
          onPlay={() => this.props.onPlay()}
          onPause={() => this.props.onPause()}
          onEnded={() => this.props.moveCursor(1)}
          onError={() => this.props.moveCursor(1)}
          poster={this.props.poster}
          style={{maxHeight: "80vh", minHeight: "40vh", maxWidth: "90vw"}}
        >
          <source src={this.props.source}/>
        </video>
        <S.PlayerMetaStyle>
          {this.props.name}
        </S.PlayerMetaStyle>
      </S.PlayerStyle>
    )
  }
}


export default Player;
