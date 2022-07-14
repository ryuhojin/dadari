import { Catchphrase, SubTitle, BoxList, Panel } from "components/main";

const Section = () => {
  return (
    <>
      <Catchphrase />
      <SubTitle sub={"지금 바로 비교해보세요"} />
      <Panel />
      <SubTitle sub={"이런 구독도 있어요"} />
      <BoxList />
    </>
  );
};
export default Section;
