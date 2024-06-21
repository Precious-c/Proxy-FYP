import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Button, Grid } from "@mui/material";

import logo from "../assets/logo.png";

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    footerItem: {
      fontSize: "14px",
      color: "#fff",
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        width={"100%"}
        sx={{
          marginTop: "3em",
          padding: "0 0.6em 0 2em",
          "@media (min-width: 900px)": {
            padding: "0 4.3em 0 5.7em",
          },
        }}
      >
        <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={4} md={3} lg={3}>
            <img src={logo} alt="Logo" width="80px" height="auto" />
          </Grid>
          <Grid item xs={4} md={3} lg={3}>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/privacy" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/terms" color="inherit" underline="none">
                Terms of Service
              </Link>
            </Typography>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/cookies" color="inherit" underline="none">
                Cookies Policy
              </Link>
            </Typography>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/sitemap" color="inherit" underline="none">
                Sitemap
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4} md={3} lg={3}>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/faq" color="inherit" underline="none">
                FAQ
              </Link>
            </Typography>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/support" color="inherit" underline="none">
                Support
              </Link>
            </Typography>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/affiliate" color="inherit" underline="none">
                Affiliate Program
              </Link>
            </Typography>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/partners" color="inherit" underline="none">
                Partners
              </Link>
            </Typography>
            <Typography variant="footerItem" color="inherit" noWrap sx={{ display: "block" }}>
              <Link href="/feedback" color="inherit" underline="none">
                Feedback
              </Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button variant="contained" color="primary" sx={{ width: "200px", margin: "1em" }}>
              Contact Us
            </Button>
            <Button variant="outlined" color="primary" sx={{ width: "200px", margin: "1em" }}>
              Subscribe
            </Button>
          </Grid>
          <Typography
            variant="footerItem"
            color="inherit"
            noWrap
            sx={{ display: "block", textAlign: "center", width: "100%", marginTop: "1em" }}
          >
            &copy; Copyright 2024, Proxy. All Rights Reserved.
          </Typography>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
