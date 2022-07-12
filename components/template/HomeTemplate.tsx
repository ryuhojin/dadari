import { Footer, HeaderMain } from "components/base";
import Meta from "components/common/Meta";
import styled from "styled-components";
import {
  Catchphrase,
  SubTitle,
  BoxList,
  Panel,
} from "components/main";
const StyledMainTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledMain = styled.main`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background: #111320 url(assets/image/bg_main.png) no-repeat center top /
    contain;
`;

const HomeTemplate = ({ children }: any) => {
  return (
    <>
      <Meta title={"다달이"} />
      <StyledMainTempalte>
        <HeaderMain />
        <StyledMain>
          <Catchphrase />
          <SubTitle sub={"지금 바로 비교해보세요"} />
          <Panel />
          <SubTitle sub={"이런 구독도 있어요"} />
          <BoxList />
        </StyledMain>
        <Footer />
      </StyledMainTempalte>
    </>
  );
};

export default HomeTemplate;
