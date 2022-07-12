import { IconArrowR, IconMovie } from "components/icons";
import styled from "styled-components";
import PanelIconList from "./PanelIconList";

const StyledPanel = styled.div`
  position: relative;
`;

const StyledPanelBack = styled.div`
  margin: 0 20px;
  height: 64px;
  box-shadow: 0 3px 30px 0 rgba(126, 37, 255, 0.31),
    inset 1px 1px 2px 0 rgba(255, 255, 255, 0.07);
  background-image: linear-gradient(101deg, #ac66ff, #7435ff);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border-radius: 14px;
  margin-top: 13px;
  opacity: 0.8;
`;

const StyledPanelFront = styled.div`
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

const StyledPanelLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPanelRight = styled.div`
  display: flex;
`;

const StyledIcon = styled.div`
  position: relative;
`;

const StyledIconBack = styled.div`
  width: 40px;
  height: 40px;
  opacity: 0.2;
  border-radius: 10px;
  box-shadow: 2px 4px 16px 0 rgba(126, 37, 255, 0.52),
    inset 1px 1px 3px 0 rgba(248, 213, 255, 0.2);
  background-color: #fff;
`;

const StyledIconFront = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;

const StyledBtn = styled.div`
  position: relative;
`;

const StyledBtnBack = styled.div`
  width: 30px;
  height: 30px;
  opacity: 0.15;
  border-radius: 6px;
  background-color: #fff;
`;

const StyledBtnFront = styled.div`
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Panel = () => {
  return (
    <StyledPanel>
      <StyledPanelBack />
      <StyledPanelFront>
        <StyledPanelLeft>
          <StyledIcon>
            <StyledIconBack />
            <StyledIconFront>
              <IconMovie iWidth={20} iHeight={20} />
            </StyledIconFront>
          </StyledIcon>
        </StyledPanelLeft>
        <StyledPanelRight>
          <PanelIconList />
          <StyledBtn>
            <StyledBtnBack />
            <StyledBtnFront>
              <IconArrowR iWidth={26} iHeight={26} />
            </StyledBtnFront>
          </StyledBtn>
        </StyledPanelRight>
      </StyledPanelFront>
    </StyledPanel>
  );
};
export default Panel;
