import { Footer } from "components/base";
import { CategoryList, SubCategoryList } from "components/list";
import SectionContainer from "./SectionContainer";

const CategoryContainer = () => {
  return (
    <>
      <CategoryList />
      <SubCategoryList />
      <SectionContainer />
      <Footer />
    </>
  );
};
export default CategoryContainer;
