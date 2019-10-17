import React from "react";
import * as S from "./Player.styled";

interface Props {
  source: string;
  name: string;
  poster: string;
  size: number;

  playing: boolean;
  looping: boolean;

  onPlay: Function;
  onPause: Function;
  moveCursor: Function;
}

interface State {
  autoplay: boolean;
  volume: number;
}

class Player extends React.Component<Props, State> {
  ref: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);

    this.ref = React.createRef<HTMLVideoElement>();

    this.state = {
      autoplay: false,
      volume: 1.00,
    };
  }

  getVideoNode(): HTMLVideoElement | null {
    return this.ref.current;
  }

  onVolumeChange() {
    const node = this.getVideoNode();
    if (!node)
      return;

    if (node.muted)
      this.setState({volume: 0});
    else
      this.setState({volume: node.volume})
  }

  componentDidUpdate() {
    if (this.props.playing && !this.state.autoplay)
      this.setState({autoplay: true});

    const node = this.getVideoNode();
    if (!node)
      return;

    this.props.playing ? node.play() : node.pause();
    node.volume = this.state.volume;
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
          onVolumeChange={() => this.onVolumeChange()}
          poster={this.props.poster}
          style={
            {
              maxHeight: "70vh",
              minHeight: "40vh",
              maxWidth: "90vw",
              borderRadius: "5px"
            }
          }
        >
          <source src={this.props.source}/>
        </video>

        <S.PlayerTextStyle>
          {this.props.name} | {this.props.size}
        </S.PlayerTextStyle>

        <S.PlayerTextStyle>
          <a
            href={`https://google.com/searchbyimage?image_url=${this.props.poster}`}
            target={"_blank"}
            style={{textDecoration: "none"}}
          >
            {"🔎"}
          </a>
        </S.PlayerTextStyle>
      </S.PlayerStyle>
    )
  }
}


export default Player;
