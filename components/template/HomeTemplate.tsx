import { Footer, HeaderMain } from "components/base";
import Meta from "components/common/Meta";
import SectionBtn from "components/main/SectionBtn";
import styled from "styled-components";
const StyledMainTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledMain = styled.main`
  flex-grow: 1;
  background: #111320 url(assets/image/bg_main.png) no-repeat center top /
    contain;
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

const StyledCoreSection = styled.div`
  margin-top: 132px;
  p {
    margin: 0 26px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #fff;
    line-height: 1.25;
  }
  div {
    margin-top: 13px;
  }
`;

const HomeTemplate = ({ children }: any) => {
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
          <StyledCoreSection>
            <p>지금 바로 비교해보세요</p>
            <SectionBtn />
          </StyledCoreSection>
        </StyledMain>
        <Footer />
      </StyledMainTempalte>
    </>
  );
};

export default HomeTemplate;
