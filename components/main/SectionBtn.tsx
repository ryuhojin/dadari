import styled from "styled-components";
const StyledSectionBtn = styled.div`
  margin: 0 20px;
  height: 64px;
  padding: 12px;
  box-shadow: 0 3px 30px 0 rgba(126, 37, 255, 0.31),
    inset 1px 1px 2px 0 rgba(255, 255, 255, 0.07);
  background-image: linear-gradient(101deg, #ac66ff, #7435ff);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border-radius: 14px;
  opacity: 0.69;
`;
const SectionBtn = () => {
  return <StyledSectionBtn></StyledSectionBtn>;
};
export default SectionBtn;
