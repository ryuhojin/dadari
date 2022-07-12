import styled from "styled-components";
import PanelIcon from "./PanelIcon";

const StyledPanelIconList = styled.div`
  display: flex;
  margin-right: 12px;
  div + div {
    margin-left: -15px;
  }
`;
const PanelIconList = () => {
  return (
    <StyledPanelIconList>
      <PanelIcon type="icon" />
      <PanelIcon type="icon" />
      <PanelIcon type="icon" />
      <PanelIcon type="plus" />
    </StyledPanelIconList>
  );
};
export default PanelIconList;
