import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import landingPageImage from "../assets/landingpage-img.png";
import Button from "../components/Button";
import { Grid, Paper, Typography } from "@mui/material";

const Landingpage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "100vh", // Full height to center vertically
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "5.7rem",
        paddingRight: "5.7rem",
      }}
    >
      {/* sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        height: "100vh",
        gap: 2,
      }}
    > */}
      <Grid item xs={12} md={12}>
        <Typography variant="h2" component="h3" sx={{ marginTop: 7, textAlign: "center" }}>
          Welcome
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          // height: "100vh",
          // gap: 2,
        }}
      >
        <Box sx={{ marginBottom: 3 }}>
          <img src={landingPageImage}></img>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" component="p" sx={{ textAlign: "center" }}>
          Select your account type and Log In
        </Typography>

        <Button text="I'm a customer" to={"/login"} />
        <Button text="I'm a Provider" />
      </Grid>
    </Grid>
  );
};

export default Landingpage;
