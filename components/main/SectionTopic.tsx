import { IconArrowR, IconMovie } from "components/icons";
import styled from "styled-components";
import SectionIconList from "./SectionIconList";

const StyledSectionTopic = styled.div`
  position: relative;
`;
const StyledSectionTopicBackground = styled.div`
  margin: 0 20px;
  height: 64px;
  box-shadow: 0 3px 30px 0 rgba(126, 37, 255, 0.31),
    inset 1px 1px 2px 0 rgba(255, 255, 255, 0.07);
  background-image: linear-gradient(101deg, #ac66ff, #7435ff);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border-radius: 14px;
  margin-top: 13px;
  opacity: 0.69;
`;

const StyledSectionTopicFront = styled.div`
  position: absolute;
  top: 0;
  margin: 0 20px;
  padding: 12px;
  width: -webkit-fill-available;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSecitonIconGrp = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSectionIcon = styled.div`
  position: relative;
`;
const StyledSectionIconBackground = styled.div`
  width: 40px;
  height: 40px;
  opacity: 0.2;
  border-radius: 10px;
  box-shadow: 2px 4px 16px 0 rgba(126, 37, 255, 0.52),
    inset 1px 1px 3px 0 rgba(248, 213, 255, 0.2);
  background-color: #fff;
`;
const StyledSectionIconFront = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;
const StyledSectionTitle = styled.span`
  font-size: 17px;
  line-height: 1.35;
  letter-spacing: 0.5px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  margin-left: 16px;
`;
const StyledSectionItmGrp = styled.div`
  display: flex;
`;
const StyledSectionArrow = styled.div`
  position: relative;
`;
const StyledSectionArrowBackground = styled.div`
  width: 30px;
  height: 30px;
  opacity: 0.15;
  border-radius: 6px;
  background-color: #fff;
`;
const StyledSectionArrowFront = styled.div`
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionTopic = () => {
  return (
    <StyledSectionTopic>
      <StyledSectionTopicBackground />
      <StyledSectionTopicFront>
        <StyledSecitonIconGrp>
          <StyledSectionIcon>
            <StyledSectionIconBackground />
            <StyledSectionIconFront>
              <IconMovie iWidth={20} iHeight={20} />
            </StyledSectionIconFront>
          </StyledSectionIcon>
          <StyledSectionTitle>OTT</StyledSectionTitle>
        </StyledSecitonIconGrp>
        <StyledSectionItmGrp>
          <SectionIconList />
          <StyledSectionArrow>
            <StyledSectionArrowBackground />
            <StyledSectionArrowFront>
              <IconArrowR iWidth={26} iHeight={26} />
            </StyledSectionArrowFront>
          </StyledSectionArrow>
        </StyledSectionItmGrp>
      </StyledSectionTopicFront>
    </StyledSectionTopic>
  );
};
export default SectionTopic;
