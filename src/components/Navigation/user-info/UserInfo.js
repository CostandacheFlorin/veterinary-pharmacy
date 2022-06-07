import React, { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { StyledNavText } from "../../UIElements/Typography/NavText.styled";
import { AuthContext } from "../../../context/auth-context";

import { StyledUserIcon, StyledUserInfo } from "./UserInfo.styled";

const UserInfo = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      {!auth.isLoggedIn && <StyledUserInfo to="/autentificare">
        <StyledNavText variant="h3" type="text" align="center">
          Autentificare
        </StyledNavText>

        <StyledUserIcon>
          <PersonIcon />
        </StyledUserIcon>
      </StyledUserInfo>}

      {auth.isLoggedIn && <StyledUserInfo to="/profil">
        <StyledNavText variant="h3" type="text" align="center">
          Profil
        </StyledNavText>

        <StyledUserIcon>
          <PersonIcon />
        </StyledUserIcon>
      </StyledUserInfo>}
    </>
  );
};

export default UserInfo;
