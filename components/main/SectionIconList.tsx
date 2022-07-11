import { addAbortSignal } from "stream";
import styled from "styled-components";
import SectionIcon from "./SectionIcon";

const StyledSectionIconList = styled.div`
  display: flex;
  margin-right: 12px;
  div + div {
    margin-left: -15px;
  }
`;
const SectionIconList = () => {
  return (
    <StyledSectionIconList>
      <SectionIcon type="icon"/>
      <SectionIcon type="icon"/>
      <SectionIcon type="icon"/>
      <SectionIcon type="plus" />
    </StyledSectionIconList>
  );
};
export default SectionIconList;
