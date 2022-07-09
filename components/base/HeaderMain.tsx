import styled from "styled-components";

const StyledMainHeader = styled.header`
  background-color: #141414;
  height: 60px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderMain = () => {
  return (
    <StyledMainHeader>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M6.125 26.217 0 26.261 4.746 5.109l6.126-.044zM26 14.276l-8.002.052-5.11-9.276L20.89 5zM16.217 26.158l-8.002.052 9.173-9.906 8.002-.052z" />
        </g>
      </svg>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="1zyhncf5ia" d="M0 0h24v24H0z" />
        </defs>
        <g transform="translate(4 4)" fill="none" fillRule="evenodd">
          <mask id="kki0ut7prb" fill="#fff">
            <use xlinkHref="#1zyhncf5ia" />
          </mask>
          <path
            d="M17.242 15.544a8.53 8.53 0 0 0 1.736-5.156c0-4.736-3.854-8.589-8.589-8.589C5.653 1.8 1.8 5.653 1.8 10.389c0 4.735 3.853 8.589 8.589 8.589a8.533 8.533 0 0 0 5.156-1.736l4.607 4.607a1.196 1.196 0 0 0 1.697-.001 1.201 1.201 0 0 0 0-1.697l-4.607-4.607zM10.389 4.2a6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188A6.194 6.194 0 0 1 4.2 10.389 6.196 6.196 0 0 1 10.389 4.2z"
            fill="#FFF"
            mask="url(#kki0ut7prb)"
          />
        </g>
      </svg>
    </StyledMainHeader>
  );
};
export default HeaderMain;
