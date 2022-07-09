import styled from "styled-components";

const StyledSectionItem = styled.div`
  width: 150px !important;
  height: 169px;
  margin-top: 17px;
  padding: 15px 12px 20px;
  border-radius: 14px;
  box-shadow: inset 1px 1px 2px 0 rgba(255, 255, 255, 0.07);
  background-color: #21283f;
`;
const SectionItem = () => {
  return <StyledSectionItem></StyledSectionItem>;
};
export default SectionItem;
