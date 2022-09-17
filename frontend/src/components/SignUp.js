import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { getTouchRippleUtilityClass } from "@mui/material";
import useAuth from "./../hooks/useAuth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright � "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const url = "http://localhost:5000/users";
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [success, setSuccess] = useState("");
  const [suc, setSuc] = useState();
  const [error, setError] = useState("");
  const [err, setErr] = useState();

  

  const { registerUser, errorr } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      firstname: data.get("firstName"),
      lastname: data.get("lastName"),
      email: data.get("email"),
      userpassword: data.get("password"),
    };

    await registerUser(values);

    console.log(values)

    // setFirstname(data.get("firstName"));
    // setLastname(data.get("lastName"));
    // setEmail(data.get("email"));
    // setUserpassword(data.get("password"));
    // console.log(firstname, lastname, email, userpassword);

    // try {
    //   const response = await axios.post(`${url}/signup`, {
    //     firstname: firstname,
    //     lastname: lastname,
    //     email: email,
    //     userpassword: userpassword,
    //   });
    //   if (response.status === 200) {
    //     console.log("Signup Succesfully");
    //     setSuccess("Signup Successfully");
    //     setSuc(true);
    //     setFirstname("");
    //     setLastname("");
    //     setEmail("");
    //     setUserpassword("");
    //   }
    // } catch (err) {
    //   if (err.response?.status === 400) {
    //     console.log("Invalid output");
    //     setError("Invalid input");
    //     setErr(true);
    //   } else if (err.response?.status === 401) {
    //     console.log("User Already exist");
    //     setError("User Already Exist");
    //     setFirstname("");
    //     setLastname("");
    //     setEmail("");
    //     setUserpassword("");
    //     setErr(true);
    //   } else {
    //     console.log("Registration failed");
    //     setError("Registration failed");
    //     setErr(true);
    //   }
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <p>{err ? <Alert severity="error">{error}</Alert> : null}</p>
            <p>{suc ? <Alert severity="success">{success}</Alert> : null}</p>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
