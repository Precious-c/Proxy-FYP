import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import Rating from "@mui/material/Rating";
import React from "react";

// Create a custom theme with responsive typography settings
const theme = createTheme({
  typography: {
    cardTitle: {
      fontSize: "0.9rem", // default for xs
      "@media (min-width:600px)": {
        fontSize: "1rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem", // md
      },
    },
    cardDetails: {
      fontSize: "0.7rem", // default for xs
      "@media (min-width:600px)": {
        fontSize: "0.8rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "0.9rem", // md
      },
    },
  },
});

const ServiceCard = ({ service }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={6} sm={4} lg={3}>
        <Paper>
          <Card sx={{ minWidth: 160, maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia component="img" height="120" image={service.img} alt={service.title} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="cardTitle"
                  component="h6"
                  sx={{ fontWeight: 700 }}
                >
                  {service.serviceName}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="cardDetails"
                      sx={{ fontWeight: "500", color: "#388B06", display: "block" }}
                    >
                      {service.discount ? `${service.discount}% Off` : null}
                    </Typography>
                    <Typography variant="cardDetails" sx={{ fontWeight: "500", display: "block" }}>
                      by {service.providerName}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Rating
                      name="read-only"
                      value={service.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default ServiceCard;
