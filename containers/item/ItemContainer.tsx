import {
  Description,
  Divider,
  ItemFee,
  ItemTitle,
  Membership,
} from "components/item";

const ItemContainer = () => {
  return (
    <>
      <Description />
      <Divider />
      <Membership />
      <ItemTitle title={["월 구독료"]} />
      <ItemFee />
      <ItemTitle title={["월 구독료"]} />
      <ItemFee />
      <ItemTitle title={["월 구독료"]} />
      <ItemFee />
    </>
  );
};
export default ItemContainer;
