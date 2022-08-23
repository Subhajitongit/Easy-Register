import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Geolocation from "../../components/geolocation";
import QrCode from "../../components/QrCode";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/Subhajitongit/Easy-Register"
      >
        EasyRegister
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function Teacher() {
  const [tCode, setTCode] = React.useState("");
  const location = Geolocation();

  const handleSubmit = (event) => {
    setTCode(
      location.loaded
        ? JSON.stringify(location.coordinates.lat.toFixed(3)) +
            JSON.stringify(location.coordinates.lng.toFixed(3)) +
            document.getElementById("name").value
        : "Not available yet" + document.getElementById("name").value
    );
    event.preventDefault();
    console.log(
      location.loaded
        ? JSON.stringify(location.coordinates.lat.toFixed(3)) +
            JSON.stringify(location.coordinates.lng.toFixed(3))
        : "Not available yet",
      document.getElementById("name").value
    );
  };

  return (
    <div>
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Generate QR
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Enter your Name"
                name="name"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create QR Code
              </Button>
            </Box>
          </Box>

          <QrCode text={tCode} />

          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Teacher;
