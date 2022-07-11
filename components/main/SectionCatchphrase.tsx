import styled from "styled-components";

const StyledSectionCatchPhrase = styled.div`
  padding: 31px 26px;
  height: 273px;
`;
const StyledCatchPhrase = styled.p`
  margin: 0;
  font-size: 30px;
  line-height: 1.33;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #fff;
  span {
    color: #fff;
    font-weight: bold;
    line-height: 1.33;
  }
`;
const SectionCatchPhrase = () => {
  return (
    <StyledSectionCatchPhrase>
      <StyledCatchPhrase>
        넷플릭스와
        <br />
        왓챠,
        <br />
        <span>뭐가 다르지?</span>
      </StyledCatchPhrase>
    </StyledSectionCatchPhrase>
  );
};
export default SectionCatchPhrase;
