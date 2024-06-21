import { Box, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate(`/category/${item.title}`);
  };

  return (
    <Grid item key={item.key} className="categoryBox" onClick={handleClick}>
      <Box
        // key={item.key}
        sx={{
          justifySelf: "flex-start",
          display: "flex",
          justifyContent: "center",
          flexDirection: "Column",
          backgroundColor: "white",
          padding: "0.5em",
          borderRadius: "15px",
          // width: "60px",
          width: { xs: "70px", sm: "80px", md: "90px", lg: "120px" },
        }}
      >
        {/* category image */}
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
          style={{ margin: "0 auto" }}
        />
        <Typography
          variant="categorySubtitle"
          sx={{
            textAlign: "center",
            fontWeight: "700",
            margin: "0.2em",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CategoryBox;
