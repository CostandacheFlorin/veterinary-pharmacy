import React from "react";
import { StyledProfileWrapper } from "./Profile.styled";
import ProfileActions from "../../components/Profile/ProfileActions/ProfileActions";
import ProfileDetails from "../../components/Profile/ProfileDetails/ProfileDetails";
import ProfileStatistics from "../../components/Profile/ProfileStatistics/ProfileStatistics";
const Profile = () => {
  return (
    <StyledProfileWrapper>
      <ProfileActions />
      <ProfileDetails
        name="Costandache Florin"
        email="Email@email.com"
        phone="0213848218"
        address="strada stiintei nr3"
      />
      <ProfileStatistics orderNumber={"6"} reviewNumber={"8"} favoriteNumber={"2"} />

    </StyledProfileWrapper>
    
  );
};

export default Profile;
