import styled from "styled-components";

import { Footer, HeaderMain } from "components/base";

const StyledMainTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSection = styled.main`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background: #111320 url(assets/image/bg_main.png) no-repeat center top /
    contain;
`;

const HomeTemplate = ({ children }: any) => {
  return (
    <StyledMainTempalte>
      <HeaderMain />
      <StyledSection>{children}</StyledSection>
      <Footer />
    </StyledMainTempalte>
  );
};

export default HomeTemplate;
