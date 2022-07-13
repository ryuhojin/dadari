import Meta from "components/common/Meta";
import CategoryList from "components/list/CategoryList";
import SearchTemplate from "components/template/SearchTemplate";
import type { NextPage } from "next";

const List: NextPage = () => {
  return (
    <>
      <Meta title={"다다리 - 목록"} />
      <SearchTemplate>
        <CategoryList/>
      </SearchTemplate>
    </>
  );
};

export default List;
