import styled from "styled-components";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledHeaderTemplate = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
`;
const StyledContentTemplate = styled.div`
  background: #fff;
  flex-grow: 1;
  width: 100%;
`;
const StyledFooterTemplate = styled.div`
  width: 100%;
  height: 100px;
  background: #f5f4f8;
`;

const MainTemplate = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <StyledMainTemplate>
      <StyledHeaderTemplate>1</StyledHeaderTemplate>
      <StyledContentTemplate>113{children}</StyledContentTemplate>
      <StyledFooterTemplate>2</StyledFooterTemplate>
    </StyledMainTemplate>
  );
};
export default MainTemplate;
