import { Box, Grid } from "@mui/material";

import FeaturedOffer from "../components/FeaturedOffer";
import CategoryGridDisplay from "../components/CategoryGridDisplay";
import TopServices from "../components/TopServices";
import Cities from "../components/Cities";
import HowItWorks from "../components/HowItWorks";
import ServiceProviderCTA from "../components/ServiceProviderCTA";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // paddingLeft: "5.7rem",
        marginBottom: "50px",
      }}
    >
      <Main />
      <FeaturedOffer />
      <CategoryGridDisplay />
      <TopServices />
      <Cities />
      <HowItWorks />
      <ServiceProviderCTA />
      <Footer />
    </Grid>
  );
};

export default Home;
