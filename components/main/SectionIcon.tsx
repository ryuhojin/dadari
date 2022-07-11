import styled from "styled-components";

const StyledSectionIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 0;
  padding: 0 2px 1px 0;
  border-radius: 50%;
  border: solid 2px #8246fa;
  background-color: #2d344b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSectionText = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  text-align: center;
  color: #bcc2d6;
`;
const SectionIcon = ({ type }: { type: string }) => {
  return type == "icon" ? (
    <StyledSectionIcon></StyledSectionIcon>
  ) : (
    <StyledSectionIcon>
      <StyledSectionText>+2</StyledSectionText>
    </StyledSectionIcon>
  );
};
export default SectionIcon;
