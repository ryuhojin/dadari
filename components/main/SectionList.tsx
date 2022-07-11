import styled from "styled-components";

import SectionItem from "./SectionItem";

const StyledSectionList = styled.div`
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

const SectionList = () => {
  return (
    <StyledSectionList>
      <StyledScrollBox>
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
      </StyledScrollBox>
    </StyledSectionList>
  );
};
export default SectionList;
