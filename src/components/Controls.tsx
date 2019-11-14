import React from "react";
import { ControlsStyle, ControlButtonStyle, DelimiterStyle, PlayBackStyle } from "./Controls.styled";
import { MdFileDownload } from "react-icons/md";



interface Props {
  source: string;
  playing: boolean;
  looping: boolean

  moveCursor: Function;
  toggleLoop: Function;
}

interface State {
}

class Controls extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <ControlsStyle>
        <PlayBackStyle>
          <ControlButtonStyle>
            <span onClick={() => this.props.moveCursor(-1)}>
              {"◀"}
            </span>
          </ControlButtonStyle>

          <DelimiterStyle>
            |
        </DelimiterStyle>

          <ControlButtonStyle>
            <span onClick={() => this.props.moveCursor(1)}>
              {"▶"}
            </span>
          </ControlButtonStyle>
        </PlayBackStyle>
        <br />
        <br />

        <ControlButtonStyle>
          <span onClick={() => this.props.toggleLoop()}
            style={{ color: this.props.looping ? "hotpink" : "orange" }}>
            {this.props.looping ? "LOOPING" : "LOOP"}
          </span>
        </ControlButtonStyle>

        <ControlButtonStyle>
          <a
            href={this.props.source}
            download
            target={"_blank"}
            style={
              {
                color: "hotpink",
                textDecoration: "none"
              }
            }
          >
            DOWNLOAD
          </a>
          <MdFileDownload/>
        </ControlButtonStyle>
      </ControlsStyle>
    )
  }
}

export default Controls;