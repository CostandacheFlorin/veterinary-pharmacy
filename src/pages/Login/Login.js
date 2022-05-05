// import "./Login.css";


import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";

// import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import PageWrapper from "../../components/UIElements/PageWrapper/PageWrapper";
import backgroundImage from '../../img/patternbackground.jpg';
import { StyledLoginOptions, StyledFormContainer } from "./Login.styled";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";

// trb facuta functie la form sa adauge la inputuri error

const Login = () => {
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    if (username.trim() === "" || password.trim() === "") {
      setInputError(true);
    }

    console.log({
      email: data.get("username"),
      password: data.get("password"),
    });
  };


  console.log("test");

  return (
    <PageWrapper background={backgroundImage}>
      <StyledFormContainer onSubmit={handleSubmit}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Autentificare
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nume de utilizator"
          name="username"
          error={inputError}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Parola"
          type="password"
          id="password"
          error={inputError}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Ramai logat."
        />
        <StyledMediumButton>
          Autentificare
        </StyledMediumButton>

        <StyledLoginOptions>
          <Link href="/uitare-parola" variant="body2">
            Ti-ai uitat parola?
          </Link>

          <Link href="/inregistrare" variant="body2">
            {"Creeaza un cont."}
          </Link>
        </StyledLoginOptions>
      </StyledFormContainer>
    </PageWrapper>
  );
};

export default Login;
