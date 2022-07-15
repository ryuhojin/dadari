import styled from "styled-components";
import MembershipChart from "./MembershipChart";

const StyeldMemberShip = styled.div`
  height: 202px;
  background-color: rgba(255, 0, 255, 0);
  padding: 0 20px;
`;

const StyledMemberShipTitle = styled.p`
  margin: 34px 0 20px 0;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;
const Membership = () => {
  return (
    <StyeldMemberShip>
      <StyledMemberShipTitle>멤버십</StyledMemberShipTitle>
      <MembershipChart />
    </StyeldMemberShip>
  );
};
export default Membership;
