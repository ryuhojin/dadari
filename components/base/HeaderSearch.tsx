import { IconArrowL, IconSearch } from "components/icons";
import styled from "styled-components";

const StyledHeaderSearch = styled.header`
  background-color: #111320;
  height: 60px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSearch = () => {
  return (
    <StyledHeaderSearch>
      <IconArrowL iWidth={32} iHeight={32} />
      <IconSearch iWidth={32} iHeight={32} />
    </StyledHeaderSearch>
  );
};
export default HeaderSearch;
