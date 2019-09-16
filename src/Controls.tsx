import React from "react";
import * as S from "./Controls.styled";


interface Props {
    source: string;
    playing: boolean;

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
            <S.ControlsStyle>
                <S.ControlsTextStyle>
                    <span onClick={() => this.props.moveCursor(-1)}>
                    BACK
                    </span>
                </S.ControlsTextStyle>

                <S.ControlsTextStyle>
                    <span onClick={() => this.props.toggleLoop()}>
                    LOOP
                    </span>
                </S.ControlsTextStyle>

                <S.ControlsTextStyle>
                    <a href={this.props.source} target={"_blank"} style={{color: "hotpink", textDecoration: "none"}}>
                        DOWNLOAD
                    </a>
                </S.ControlsTextStyle>

                <S.ControlsTextStyle>
                    <span onClick={() => this.props.moveCursor(1)}>
                    NEXT
                    </span>
                </S.ControlsTextStyle>

            </S.ControlsStyle>
        )
    }
}

export default Controls;