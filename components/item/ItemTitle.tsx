import styled from "styled-components";

const StyledItemTitle = styled.div`
  background-color: #21283f;
  display: flex;
  height: 38px;;
  justify-content: center;
  align-items: center;

  span {
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.5px;
    text-align: center;
    color: #bcc2d6;
  }
`;

const ItemTitle = ({ title }: { title: String }) => {
  return (
    <StyledItemTitle>
      <span>{title}</span>
    </StyledItemTitle>
  );
};
export default ItemTitle;
