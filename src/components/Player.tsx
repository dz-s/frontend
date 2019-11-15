import React from "react";
import * as S from "./Player.styled";
import File from "../entities/file";
import Utils from "../utils";

interface Props {
  media: File;

  playing: boolean;
  looping: boolean;

  onPlay: Function;
  onPause: Function;
  moveCursor: Function;
}

interface State {
  autoplay: boolean;
  volume: number;
  size: number;
}

class Player extends React.Component<Props, State> {
  ref: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);

    this.ref = React.createRef<HTMLVideoElement>();

    this.state = {
      autoplay: false,
      volume: 1.00,
      size: 0
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

  async componentDidUpdate(prevProps: Props) {
    if (prevProps.media.full === this.props.media.full)
      return;

    if (this.props.playing && !this.state.autoplay)
      this.setState({autoplay: true});

    this.setState({size: await Utils.fetchSize(this.props.media.full)});

    const node = this.getVideoNode();
    if (!node)
      return;

    this.props.playing ? node.play() : node.pause();
    node.volume = this.state.volume;
  }

  async componentDidMount() {
    this.setState({size: await Utils.fetchSize(this.props.media.full)});
  }

  render() {
    return (
      <S.PlayerStyle>
        <video
          playsInline={true}
          ref={this.ref}
          key={this.props.media.full}
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
          poster={this.props.media.thumbnail}
          style={
            {
              maxHeight: "70vh",
              minHeight: "40vh",
              maxWidth: "90vw",
              borderRadius: "5px"
            }
          }
        >
          <source src={this.props.media.full}/>
        </video>

        <S.PlayerTextStyle>
          {this.props.media.name} | {Utils.formatSize(this.state.size)}
        </S.PlayerTextStyle>

        <S.PlayerTextStyle>
          <a
            href={`https://www.google.com/searchbyimage?image_url=${this.props.media.thumbnail}`}
            target={"_blank"}
            style={{textDecoration: "none"}}
          >
            🔎
          </a>
        </S.PlayerTextStyle>
      </S.PlayerStyle>
    )
  }
}


export default Player;
