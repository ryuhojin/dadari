import { Footer, HeaderMain } from "components/base";
import Meta from "components/common/Meta";
import styled from "styled-components";
const StyledMainTempalte = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledMain = styled.main`
  flex-grow: 1;
  background: #141414 url(assets/bg_main.png) no-repeat center top / contain;
`;
const MainTemplate = ({ children }: any) => {
  return (
    <>
      <Meta title={"다달이"} />
      <StyledMainTempalte>
        <HeaderMain />
        <StyledMain></StyledMain>
        <Footer />
      </StyledMainTempalte>
    </>
  );
};

export default MainTemplate;
