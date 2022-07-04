import styled from "styled-components";
import bgImg from "assets/image/background.png";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #111320;
`;

const StyledHeaderTemplate = styled.div`
  width: 100%;
  height: 60px;
`;

const StyledContentTemplate = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const StyledFooterTemplate = styled.div`
  width: 100%;
  height: 90px;
  background: #000;
`;

const StyledBackgroundTemplate = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MainTemplate = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <StyledMainTemplate>
      <StyledBackgroundTemplate>
        <StyledHeaderTemplate></StyledHeaderTemplate>
        <StyledContentTemplate>{children}</StyledContentTemplate>
      </StyledBackgroundTemplate>
      <StyledFooterTemplate></StyledFooterTemplate>
    </StyledMainTemplate>
  );
};
export default MainTemplate;
