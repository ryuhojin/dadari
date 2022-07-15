import HeaderBase from "components/base/HeaderBase";
import styled from "styled-components";

const StyledSeacrhTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSection = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

const BaseTemplate = ({ children }: any) => {
  return (
    <StyledSeacrhTempalte>
      <HeaderBase />
      <StyledSection>{children}</StyledSection>
    </StyledSeacrhTempalte>
  );
};
export default BaseTemplate;
