import styled from "styled-components";

const StyledSectionSubTitle = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.53px;
  color: #fff;
  margin: 17px 0 17px 26px;
`;
const SectionSubTitle = ({ sub }: { sub: String }) => {
  return <StyledSectionSubTitle>{sub}</StyledSectionSubTitle>;
};
export default SectionSubTitle;
