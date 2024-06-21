import SearchBar from "@mkyy/mui-search-bar";
import { Box, Grid, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchBox from "./SearchBox";
import SearchResultsPage from "../pages/SearchResultsPage";
import { useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import mockServiceProviderData from "../mockData/serviceProvider.json";
import MatchingModal from "./MatchingModal";

const Main = ({ searchTerm, location }) => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  //Responsible for the search operation
  const performSearch = (searchTerm, zipCode) => {
    // Implement your actual search logic here
    // For now, we'll return a hardcoded array of results
    // try {
    //   const results = await fetchSearchResults(searchTerm, zipCode);
    //   return results;
    // } catch (error) {
    //   console.error('Error performing search:', error);
    //   throw error;
    // }
    // console.log("mock data ", mockServiceProviderData);
    <MatchingModal searchTerm={searchTerm} />;
    return mockServiceProviderData;
  };

  // handles the search and navigation logic,
  // const searchAndNavigate = async (searchTerm, zipCode) => {
  //   try {
  //     const searchResults = await performSearch(searchTerm, zipCode);
  //     setSearchResults(searchResults);
  //     navigate(`/search/${zipCode}/${searchTerm}`);
  //   } catch (error) {
  //     console.error("Error searching and navigating:", error);
  //   }
  // };

  const handleSearch = (searchTerm, zipCode) => {
    // Perform search operation and update the searchResults state
    console.log("main search", searchTerm, zipCode);
    try {
      const searchResults = performSearch(searchTerm, zipCode);
      // const searchResults = response.json();
      console.log("search results", searchResults);
      setSearchResults(searchResults);

      navigate(`/search/${zipCode}/${searchTerm}`, {
        state: { searchTerm, zipCode, searchResults },
      });

      // return (
      //   <SearchResultsPage searchTerm={searchTerm} zipCode={zipCode} results={searchResults} />
      // );
    } catch (error) {
      console.error("Error performing search:", error);
    }

    // const results = performSearch(searchTerm, zipCode); //place holder - this is where the search logic resides
    // setSearchResults(results);
    // navigate(`/search/${zipCode}/${searchTerm}`);
    // <SearchResultsPage searchTerm={searchTerm} zipCode={zipCode} results={searchResults} />;
    // console.log("search results", results);
  };

  return (
    <Box
      sx={{
        padding: "0 1em 0 2em",
        "@media (min-width: 900px)": {
          paddingRight: "5.7rem",
          paddingLeft: "5.7rem",
        },
        marginTop: "24px",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8EFFC",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          fontWeight="700"
          color="#000000"
          fontFamily="'Ruda', sans-serif"
          fontSize="40px"
          width={"60%"}
          textAlign="center"
        >
          Find top-rated certified {searchTerm ? `${searchTerm}` : "pros"} in{" "}
          {location ? `${location}` : " your area"}.
        </Typography>
        <SearchBox onSearch={handleSearch} />
      </Box>
    </Box>
  );
};

export default Main;
