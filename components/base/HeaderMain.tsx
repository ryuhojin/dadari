import { IconLogo, IconSearch } from "components/icons";
import styled from "styled-components";

const StyledHeaderMain = styled.header`
  background-color: #111320;
  height: 60px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderMain = () => {
  return (
    <StyledHeaderMain>
      <IconLogo iWidth={30} iHeight={30} />
      <IconSearch iWidth={32} iHeight={32} />
    </StyledHeaderMain>
  );
};
export default HeaderMain;
