import { useState } from "react";
import { Box, Grid } from "@mui/material";

import FeaturedOffer from "../components/FeaturedOffer";
import CategoryGridDisplay from "../components/CategoryGridDisplay";
import TopServices from "../components/TopServices";
import Cities from "../components/Cities";
import HowItWorks from "../components/HowItWorks";
import ServiceProviderCTA from "../components/ServiceProviderCTA";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SearchResultsDisplay from "../components/SearchResultsDisplay";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchResultsPage = () => {
  // const [searchResults, setSearchResults] = useState([]);
  // const location = useLocation();
  // const { searchTerm, zipCode, searchResults } = location.state;
  console.log(location);

  // const {  } = useParams();
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
      {/* <Main searchTerm={searchTerm} location={location} /> */}
      <SearchResultsDisplay
        searchTerm={searchTerm}
        location={zipCode}
        searchResults={searchResults}
      />
      <FeaturedOffer />
      {/* <CategoryGridDisplay /> */}
      {/* <TopServices /> */}
      <Cities />
      <HowItWorks />
      <ServiceProviderCTA />
      <Footer />
    </Grid>
  );
};

export default SearchResultsPage;
