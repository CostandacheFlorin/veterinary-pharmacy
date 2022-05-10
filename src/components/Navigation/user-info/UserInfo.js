
import PersonIcon from '@mui/icons-material/Person';
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";



import {
    StyledUserIcon,
    StyledUserInfo,
  } from "./UserInfo.styled";
  
  const UserInfo = () => {
    return (
      <StyledUserInfo to="/profil">

                  <StyledNavText variant="h3" type="text"   align='center'  > Autentificare</StyledNavText>

        <StyledUserIcon>
          <PersonIcon />
          
        </StyledUserIcon>
      </StyledUserInfo>
    );
  };
  
  export default UserInfo;
  