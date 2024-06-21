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
import { Box, Button, List, ListItem } from "@mui/material";

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

const ServiceProviderCard = ({ serviceProvider }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing="3">
        <Grid xs={12} md={6}>
          {/* <Paper> */}
          <Card>
            {/*sx={{ minWidth: 160, maxWidth: 345 }}*/}
            <CardMedia
              component="img"
              height="120"
              image={serviceProvider.profilePicture}
              alt={`${serviceProvider.providerName} profile picture`}
            />
            <CardContent>
              <Typography variant="cardDetails" sx={{ fontWeight: "500", display: "block" }}>
                s{serviceProvider.providerName}
              </Typography>

              <List>
                {serviceProvider.servicesOffered.map((service, index) => (
                  <ListItem key={index}>{service}</ListItem>
                ))}
              </List>

              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box>
                  <Rating
                    name="read-only"
                    value={serviceProvider.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <Typography variant="cardDetails">{serviceProvider.reviewCount}</Typography>
                </Box>

                <Box>
                  <Typography
                    variant="cardDetails"
                    sx={{ fontWeight: "500", color: "#388B06", display: "block" }}
                  >
                    {service.discount ? `${service.discount}% Off` : null}
                  </Typography>
                  <CardActionArea>
                    <Button>Book</Button>
                  </CardActionArea>
                </Box>
              </Box>
              {/* <Typography
                  gutterBottom
                  variant="cardTitle"
                  component="h6"
                  sx={{ fontWeight: 700 }}
                >
                  {service.serviceName}
                </Typography> */}

              {/* <Grid container spacing={1}>
                  <Grid item xs={12}></Grid>
                </Grid> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ServiceProviderCard;
