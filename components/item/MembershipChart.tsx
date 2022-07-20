import styled from "styled-components";

const StyledMembershipChart = styled.div`
  height: 38px;
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  background-color: #2d344b;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > * {
    float: left;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:nth-child(1):checked ~ .toggle_option_slider {
    left: 0;
  }
  input[type="radio"]:nth-child(2):checked ~ .toggle_option_slider {
    left: 33.3%;
  }
  input[type="radio"]:nth-child(3):checked ~ .toggle_option_slider {
    left: 66.7%;
  }
  label {
    width: 33.3%;
    font-size: 15px;
    display: flex;
    justify-content: center;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: -0.29px;
    text-align: right;
    z-index: 1;
    color: #fff;
    border-radius: 22px;
    cursor: pointer;
  }
  .toggle_option_slider {
    width: 33.3%;
    height: 38px;
    border-radius: 22px;
    box-shadow: 0 2px 20px 0 rgba(130, 70, 250, 0.58),
      inset 1px 1px 2px 0 rgba(255, 255, 255, 0.3);
    background-color: #8246fa;
    position: absolute;
    transition: all 0.4s ease;
  }
`;
const MembershipChart = () => {
  return (
    <StyledMembershipChart>
      <input
        type="radio"
        className="toggle_option"
        id="first_toggle"
        name="toggle_option"
      />
      <input
        type="radio"
        className="toggle_option"
        id="second_toggle"
        name="toggle_option"
        checked
      />
      <input
        type="radio"
        className="toggle_option"
        id="third_toggle"
        name="toggle_option"
      />
      <label htmlFor="first_toggle">
        <p>베이직</p>
      </label>
      <label htmlFor="second_toggle">
        <p>프리미엄</p>
      </label>
      <label htmlFor="third_toggle">
        <p>플래티넘</p>
      </label>
      <div className="toggle_option_slider"></div>
    </StyledMembershipChart>
  );
};
export default MembershipChart;
