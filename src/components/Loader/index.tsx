import React from "react";
import { LoaderStyle } from "./Loader.styled"

class Loader extends React.Component<any> {
    render() {
        return (
            <LoaderStyle>Loading...</LoaderStyle>
        )
    }
}

export default Loader;