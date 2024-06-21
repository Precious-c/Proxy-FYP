import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";

import ctaImg from "../assets/cta-img.jpg";

const ServiceProviderCTA = () => {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        marginTop: "2em",
        // padding: "0 2em",
        // "@media (min-width: 900px)": {
        //   padding: "0 4.3em 0 5.7em",
        // },
      }}
    >
      <Grid
        container
        spacing="6"
        sx={{
          backgroundColor: "#003259",
          padding: "2em 1em 2em 3em ",
          "@media (min-width: 900px)": {
            flexDirection: "row-reverse", // Change flex direction for larger screens
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "100%",
            height: "400px",
            backgroundImage: `url(${ctaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            marginBottom: "1em",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="CtaText"
            sx={{
              fontSize: "40px",
              lineHeight: "44px",
              fontWeight: "700px",
              color: "white",
              marginBottom: ".5em",
              padding: { sm: "1em 2em" },
            }}
          >
            Grow your business with us. Become a Proxy pro today
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: "white", color: "#003259", width: "160px", marginLeft: "5.5em" }}
          >
            Learn more
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceProviderCTA;
