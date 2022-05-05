

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";

// import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

// trb facuta functie la form sa adauge la inputuri error
import PageWrapper from "../../components/UIElements/PageWrapper/PageWrapper";
import backgroundImage from '../../img/patternbackground.jpg';
import { StyledLoginOptions, StyledFormContainer } from "../Login/Login.styled";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";


const Register = () => {
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

  return (
    <PageWrapper background={backgroundImage}>
      <StyledFormContainer onSubmit={handleSubmit}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Inregistrare
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

        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirmati parola"
          type="password"
          id="confirmPassword"
          error={inputError}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          error={inputError}
        />

        <StyledMediumButton>
          Inregistrare
        </StyledMediumButton>
        <StyledLoginOptions>
          <Link href="/uitare-parola" variant="body2">
            Ti-ai uitat parola?
          </Link>

          <Link href="/autentificare" variant="body2">
            {"Am deja un cont."}
          </Link>
        </StyledLoginOptions>
      </StyledFormContainer>
      </PageWrapper>
  );
};

export default Register;
