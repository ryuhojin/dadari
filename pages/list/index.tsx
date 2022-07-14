import Meta from "components/common/Meta";
import SearchTemplate from "components/template/SearchTemplate";
import CategoryContainer from "containers/list/CategoryContainer";
import type { NextPage } from "next";

const List: NextPage = () => {
  return (
    <>
      <Meta title={"다다리 - 목록"} />
      <SearchTemplate>
        <CategoryContainer />
      </SearchTemplate>
    </>
  );
};

export default List;
