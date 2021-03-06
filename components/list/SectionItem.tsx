import { IconPlus } from "components/icons";
import styled from "styled-components";

const StyledSectionItem = styled.div`
  height: 248px;
  border: 1px solid #68708d;
  border-radius: 15px;
  padding: 14px 10px 10px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledSectionItemLogo = styled.div`
  height: 110px;
  width: 110px;
  background: url(assets/image/ico-yogipass.png) no-repeat center top / cover;
`;
const StyledSectionItemTitle = styled.p`
  align-self: flex-start;
  margin: 20px 0 8px 0;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.5px;
  color: #fff;
`;

const StyledSectionDescripton = styled.p`
  align-self: flex-start;
  font-size: 14px;
  height: 57px;
  margin: 0;
  padding-right: 54px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #bcc2d6;
`;
const StyledSectionItemBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background-image: linear-gradient(135deg, #ac66ff, #7435ff);
`;
const SectionItem = () => {
  return (
    <StyledSectionItem>
      <StyledSectionItemLogo></StyledSectionItemLogo>
      <StyledSectionItemTitle>요기요</StyledSectionItemTitle>
      <StyledSectionDescripton>
        배달앱 최초 멤버십 할인 구독 서비스
      </StyledSectionDescripton>
      <StyledSectionItemBtn>
        <IconPlus iWidth={32} iHeight={32} />
      </StyledSectionItemBtn>
    </StyledSectionItem>
  );
};
export default SectionItem;
