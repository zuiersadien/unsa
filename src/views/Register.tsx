import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const top100Films = [
  { label: "Arequipa /Arequipa /Arequipa", id: 1994 },
  { label: "Lima/Lima/Lima", id: 1972 },
];
const documento = [
  { label: "DNI", id: 1994 },
  { label: "Carnet de extranjeria ", id: 1972 },
];

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://scontent.faqp2-3.fna.fbcdn.net/v/t39.30808-6/274740079_5489507737729564_1633315680785273149_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHIwVfwJvFuMdoDIoRLWKmBgdNv6fbdMUiB02_p9t0xSNw8nvp46iCvBaagMatSOVn-kt8RlqRS64XjvEAQazCa&_nc_ohc=eO71IUOkOgwAX_M8Ddb&_nc_ht=scontent.faqp2-3.fna&oh=00_AfA5s7xsFoDz_dslC0HWY9KtGg62DCRwHLnuFyHi_ZNOxQ&oe=63652D41)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

      }}
    >
      <ThemeProvider theme={theme}>
        <Container 
          component="main"
          maxWidth="sm"
          sx={{ bgcolor: "background.paper" , boxShadow: 5}}
        >
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
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ m: "2rem" }}>
              Registrar usuario
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  id="combo-box-demo"
                  options={documento}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tipo de documento"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Documento"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Apellido Paterno"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Apellido Materno"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Nombre Completo"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Correo electronico"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="telefono"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{
                    width: 1,
                  }}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Sexo
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: 1,
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Femenino"
                    />
                    <FormControlLabel
                      value="Masculino"
                      control={<Radio />}
                      label="Masculino"
                    />
                    <FormControlLabel
                      value="otros"
                      control={<Radio />}
                      label="otros"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  id="combo-box-demo"
                  options={top100Films}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Departamento/Provincia/distrito"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar Usuario
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
