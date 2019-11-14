import styled from "styled-components";

const ControlsStyle = styled.div`
  text-align: center;
  padding: 1.5rem;
  position: relative;
  margin: 0;
  vertical-align: baseline;
  clear: both;
`;

const ControlsTextStyle = styled.div`
  color: hotpink;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 1rem;
  display: inline-block;
  text-decoration: none;

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

export { ControlsStyle, ControlsTextStyle };
