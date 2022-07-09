import { Footer, HeaderMain } from "components/base";
import Meta from "components/common/Meta";
import styled from "styled-components";
const StyledMainTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledMain = styled.main`
  flex-grow: 1;
  background: #111320 url(assets/image/bg_main.png) no-repeat center top / contain;
`;
const StyledMainCopy = styled.p`
  margin-left: 26px;
  margin-top: 31px;
  font-size: 30px;
  line-height: 1.33;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #fff;
  span {
    color: #fff;
    font-weight: bold;
    line-height: 1.33;
  }
`;
const MainTemplate = ({ children }: any) => {
  return (
    <>
      <Meta title={"다달이"} />
      <StyledMainTempalte>
        <HeaderMain />
        <StyledMain>
          <StyledMainCopy>
            넷플릭스와
            <br />
            왓챠,
            <br />
            <span>뭐가 다르지?</span>
          </StyledMainCopy>
        </StyledMain>
        <Footer />
      </StyledMainTempalte>
    </>
  );
};

export default MainTemplate;
