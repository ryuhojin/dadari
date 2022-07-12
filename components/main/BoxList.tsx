import styled from "styled-components";

import Box from "./Box";

const StyledBoxList = styled.div`
  overflow-x: scroll;
  padding: 0 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledScrollBox = styled.div`
  display: inline-flex;
  div + div {
    margin-left: 10px;
  }
`;

const BoxList = () => {
  return (
    <StyledBoxList>
      <StyledScrollBox>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </StyledScrollBox>
    </StyledBoxList>
  );
};
export default BoxList;
