import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Box, Grid, Paper, Typography } from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
//image imports
import carpenterImg from "../assets/category/carpenter.png";
import carRepairImg from "../assets/category/car-repair.png";
import cleaningImg from "../assets/category/cleaning-staff 1.png";
import electricianImg from "../assets/category/Electrician.png";
import painterImg from "../assets/category/Painter.png";
import plumberImg from "../assets/category/Plumber.png";
import repairImg from "../assets/category/repair.png";
import errandIcon from "../assets/category/icons8-run-35.png";
import rentalsIcon from "../assets/category/icons8-rent-35.png";
import CategoryBox from "./CategoryBox";
import { useEffect, useState } from "react";

const categoryData = [
  {
    id: 1,
    url: `/category/electrician`,
    title: "Electrician",
    img: electricianImg,
  },
  {
    id: 2,
    url: `/category/electrician`,
    title: "Painter",
    img: painterImg,
  },
  {
    id: 3,
    url: `/category/electrician`,
    title: "Carpenter",
    img: carpenterImg,
  },

  {
    id: 4,
    url: `/category/electrician`,
    title: "Cleaning",
    img: cleaningImg,
  },
  {
    id: 5,
    url: `/category/electrician`,
    title: "Repairs",
    img: repairImg,
  },
  {
    id: 6,
    url: `/category/electrician`,
    title: "Plumber",
    img: plumberImg,
  },
  {
    id: 7,
    url: `/category/electrician`,
    title: "Rentals",
    img: rentalsIcon,
  },
  {
    id: 8,
    url: `/category/electrician`,
    title: "Errands",
    img: errandIcon,
  },
  {
    id: 9,
    url: `/category/electrician`,
    title: "Electrician",
    img: electricianImg,
  },
  {
    id: 10,
    url: `/category/electrician`,
    title: "Painter",
    img: painterImg,
  },
  {
    id: 11,
    url: `/category/electrician`,
    title: "Carpenter",
    img: carpenterImg,
  },

  {
    id: 12,
    url: `/category/electrician`,
    title: "Cleaning",
    img: cleaningImg,
  },
  {
    id: 13,
    url: `/category/electrician`,
    title: "Repairs",
    img: repairImg,
  },
  {
    id: 14,
    url: `/category/electrician`,
    title: "Plumber",
    img: plumberImg,
  },
  {
    id: 15,
    url: `/category/electrician`,
    title: "Rentals",
    img: rentalsIcon,
  },
  {
    id: 16,
    url: `/category/electrician`,
    title: "Errands",
    img: errandIcon,
  },
  {
    id: 17,
    url: `/category/electrician`,
    title: "Electrician",
    img: electricianImg,
  },
  {
    id: 18,
    url: `/category/electrician`,
    title: "Painter",
    img: painterImg,
  },
  {
    id: 19,
    url: `/category/electrician`,
    title: "Carpenter",
    img: carpenterImg,
  },

  {
    id: 20,
    url: `/category/electrician`,
    title: "Cleaning",
    img: cleaningImg,
  },
  {
    id: 21,
    url: `/category/electrician`,
    title: "Repairs",
    img: repairImg,
  },
  {
    id: 22,
    url: `/category/electrician`,
    title: "Plumber",
    img: plumberImg,
  },
  {
    id: 23,
    url: `/category/electrician`,
    title: "Rentals",
    img: rentalsIcon,
  },
  {
    id: 24,
    url: `/category/electrician`,
    title: "Errands",
    img: errandIcon,
  },
];

console.log(categoryData);

const theme = createTheme({
  typography: {
    categorySubtitle: {
      fontSize: "12px", // default for xs
      "@media (min-width:600px)": {
        fontSize: "0.8rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "1rem", // md
      },
      "@media (min-width:1200px)": {
        fontSize: "1.2rem", // lg
      },
    },
  },
});

const CategoryGridDisplay = () => {
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Function to toggle the expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Function to adjust the number of visible categories based on container width
  const adjustCategoryVisibility = () => {
    const containerWidth = document.querySelector(".categoryContainer").clientWidth; //get the width of the container
    const boxWidth = document.querySelector(".categoryBox").clientWidth; //get box width including margin
    const boxesPerRow = Math.floor(containerWidth / boxWidth); // Calculate number of boxes per row
    const rowsVisible = expanded ? Math.ceil(categoryData.length / boxesPerRow) : 2; // Calculate number of rows to display
    setVisibleCount(rowsVisible * boxesPerRow); // Calculate and set the number of visible categories boxes
  };

  // Listen for window resize events to adjust category visibility
  useEffect(() => {
    adjustCategoryVisibility(); // Initial adjustment
    window.addEventListener("resize", adjustCategoryVisibility);
    return () => {
      window.removeEventListener("resize", adjustCategoryVisibility);
    };
  }, [expanded]); // Only run when the expanded state changes

  return (
    <ThemeProvider theme={theme}>
      <Box
        xs={12}
        sx={{
          width: "100%",
          margin: "2em 0",
          padding: "0 1em 0 2em",
          "@media (min-width: 900px)": {
            padding: "0 4.3em 0 5.7em",
          },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontWeight: "700", fontSize: "20px", marginBottom: "1em" }}
          >
            Categories
          </Typography>
          <Grid
            container
            spacing={2.5}
            columns={4}
            className="categoryContainer"
            sx={{
              //   display: "flex",
              justifyContent: "space-evenly",
              maxHeight: expanded ? "none" : 400, // Adjust based on row height
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out",
            }}
          >
            {/* Render visible categories */}
            {categoryData.slice(0, visibleCount).map((item) => (
              <CategoryBox item={item} key={item.id} />
            ))}
          </Grid>
          <Button
            variant="contained"
            onClick={toggleExpanded}
            sx={{ display: "block", margin: "20px auto" }}
          >
            {expanded ? "See Less" : "See More"}
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CategoryGridDisplay;
