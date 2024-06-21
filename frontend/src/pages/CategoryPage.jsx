import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import ServiceProviderCard from "../components/ServiceProviderCard";
import serviceProviderData from "../mockData/serviceProvider.json";
import serviceAndCategoryData from "../mockData/servicesAndCategoryData.json";

// temp logic to get a particular category
const getServiceProviders = (service) => {
  // if(service)
  //sps with "service in their name"
  //sps with "service" tag
  // sps in "service" category
};

const CategoryPage = (props) => {
  const { category } = useParams();
  return (
    <Box>
      <SearchBox />
      <Typography>{category} in your location</Typography>
      <Box>{/* <Servi */}</Box>
    </Box>
  );
};

export default CategoryPage;
