import React, {useState, useEffect} from "react";
import { StyledProfileWrapper } from "./Profile.styled";
import ProfileActions from "../../components/Profile/ProfileActions/ProfileActions";
import ProfileDetails from "../../components/Profile/ProfileDetails/ProfileDetails";
import ProfileStatistics from "../../components/Profile/ProfileStatistics/ProfileStatistics";

const Profile = () => {

  const [favoritesNumber, setfavoritesNumber] = useState(0);
  const [profileData, setProfileData] = useState("");
  const  userId = JSON.parse(localStorage.getItem("userData")).userId;
  useEffect(() => {
   const fetchFavoritesNumber  = async () => {
        const response = await fetch(`http://localhost:5000/api/management/get-favorites-number/${userId}`);
        const data = await response.json();
        setfavoritesNumber(data.number);
      }
      try {
        fetchFavoritesNumber();

      }catch (err) {
        console.log(err);
      }
  }, [])

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const response = await fetch(`http://localhost:5000/api/orders/get-order-by-user/${userId}`)
      const data = await response.json();
      setProfileData(data.data);
    }

      fetchProfileDetails();
  }, [])
  console.log(profileData);
  console.log(favoritesNumber);

  return (
    <StyledProfileWrapper>
      <ProfileActions />
      <ProfileDetails
        name={`${profileData.firstname} ${profileData.lastname}`}
        email={profileData.email}
        phone={profileData.phone}
        address={profileData.address}
      />
      <ProfileStatistics orderNumber={"6"} reviewNumber={"8"} favoriteNumber={ favoritesNumber || 0} />

    </StyledProfileWrapper>
    
  );
};

export default Profile;
