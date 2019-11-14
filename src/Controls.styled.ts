import styled from "styled-components";

const PlayBackStyle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 1.5rem;
  position: relative;
  margin: 0;
  vertical-align: baseline;
  clear: both;
`;

const ControlsStyle = styled.div`
  text-align: center;
  padding: 1.5rem;
  position: relative;
  margin: 0;
  vertical-align: baseline;
  clear: both;
`;


const DelimiterStyle = styled.span`
  color: hotpink;
  font-size: 1.25rem;
  margin-right: 1rem;
  display: inline-block;
`;

const ControlButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: hotpink;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 1rem;
  text-decoration: none;
  cursor: pointer

  &:hover {
    color: orange;
  }
  &:link {
    color: hotpink;
  }
  &:visited {
    color: red;
  }
`;

export { ControlsStyle, ControlButtonStyle, DelimiterStyle, PlayBackStyle };
