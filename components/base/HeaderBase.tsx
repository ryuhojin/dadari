import { IconArrowL, IconSearch } from "components/icons";
import styled from "styled-components";

const StyledHeaderBase = styled.header`
  background-color: #111320;
  height: 60px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderBase = () => {
  return (
    <StyledHeaderBase>
      <IconArrowL iWidth={32} iHeight={32} />
    </StyledHeaderBase>
  );
};
export default HeaderBase;
