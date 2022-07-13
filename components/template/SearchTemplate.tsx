import { Footer } from "components/base";
import HeaderSearch from "components/base/HeaderSearch";
import styled from "styled-components";

const StyledSeacrhTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSection = styled.main`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

const SearchTemplate = ({ children }: any) => {
  return (
    <StyledSeacrhTempalte>
      <HeaderSearch />
      <StyledSection>{children}</StyledSection>
      <Footer />
    </StyledSeacrhTempalte>
  );
};
export default SearchTemplate;
