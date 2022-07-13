import styled from "styled-components";

const StyledSubCategoryList = styled.div`
  overflow-x: scroll;
  padding: 0 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledScrollSubCategoryList = styled.div`
  display: inline-flex;
  div + div {
    margin-left: 8px;
  }
`;
const SubCategoryList = () => {
  return (
    <StyledSubCategoryList>
      <StyledScrollSubCategoryList></StyledScrollSubCategoryList>
    </StyledSubCategoryList>
  );
};
export default SubCategoryList;
