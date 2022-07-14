import styled from "styled-components";

const StyledSubCategoryItem = styled.div`
  border-radius: 25px;
  border: solid 1px #68708d;
  padding: 7px 16px;
  color: #fff;
  word-break: keep-all;
  display: flex;
  align-items: center;
  span {
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    color: #afb9da;
  }
`;
const SubCategoryItem = () => {
  return (
    <StyledSubCategoryItem>
      <span>다이어트</span>
    </StyledSubCategoryItem>
  );
};
export default SubCategoryItem;
