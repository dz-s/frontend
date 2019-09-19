import styled from "styled-components";

const ControlsStyle = styled.div`
  text-align: center;
  position: fixed;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
`;

const ControlsTextStyle = styled.div`
  color: hotpink;
  letter-spacing: 1px;
  margin-right: 1rem;
  display: inline-block;

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

export {ControlsStyle, ControlsTextStyle};