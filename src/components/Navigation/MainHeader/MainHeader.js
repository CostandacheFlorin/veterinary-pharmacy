
import MainNavigation from "../MainNavigation/MainNavigation";
import BrowseCategories from "../BrowseCategories/BrowseCategories";
import { StyledHeader } from "./MainHeader.styled";
const MainHeader = (props) => {
  return (
    <StyledHeader>
      <MainNavigation />
      <BrowseCategories />
    </StyledHeader>
  );
};

export default MainHeader;
