import { Box, Typography } from "@mui/material";
import React from "react";
import SearchBox from "./SearchBox";
import ServiceProviderCard from "./ServiceProviderCard";

const SearchResultsDisplay = ({ searchTerm, location, searchResults }) => {
  return (
    <Box sx={{ marginTop: "2em" }}>
      {/* <SearchBox searchTerm={searchTerm} /> */}
      <Typography>
        Result for {searchTerm} in {location}
      </Typography>

      {searchResults.map((serviceProvider) => (
        <ServiceProviderCard key={serviceProvider.providerId} serviceProvider={serviceProvider} />
      ))}
    </Box>
  );
};

export default SearchResultsDisplay;
