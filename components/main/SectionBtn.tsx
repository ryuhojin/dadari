import styled from "styled-components";
const StyledSectionBtnGrp = styled.div`
  position: relative;
`;
const StyledSectionBtnBackground = styled.div`
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
const StyledSectionBtnFront = styled.div`
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
  width: 40px;
  height: 40px;
  opacity: 0.2;
  border-radius: 10px;
  box-shadow: 2px 4px 16px 0 rgba(126, 37, 255, 0.52),
    inset 1px 1px 3px 0 rgba(248, 213, 255, 0.2);
  background-color: #fff;
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
const StyledSectionItmGrp = styled.div``;
const StyledSectionArrow = styled.div`
  width: 30px;
  height: 30px;
  opacity: 0.15;
  border-radius: 6px;
  background-color: #fff;
`;
const SectionBtn = () => {
  return (
    <StyledSectionBtnGrp>
      <StyledSectionBtnBackground />
      <StyledSectionBtnFront>
        <StyledSecitonIconGrp>
          <StyledSectionIcon />
          <StyledSectionTitle>OTT</StyledSectionTitle>
        </StyledSecitonIconGrp>
        <StyledSectionItmGrp>
          <StyledSectionArrow />
        </StyledSectionItmGrp>
      </StyledSectionBtnFront>
    </StyledSectionBtnGrp>
  );
};
export default SectionBtn;
