import { Paper, Box, Typography, Button, Grid, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import featuredImage from "../assets/ac-repair-img.png";

const FeaturedOffer = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        marginTop: "2em",
        padding: "0 2em 0 3.5em",
        "@media (min-width: 900px)": {
          padding: "0 5.7em",
        },
      }}
    >
      <Card sx={{ display: "flex", padding: "0.2em", width: "100%" }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={7}
            lg={7}
            sx={{
              display: "flex",
              flexDirection: "Column",
              // justifyContent: "flex-start",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", padding: "0.5em" }}>
              <Typography
                component="div"
                variant="h2"
                sx={{ fontWeight: "bold", fontSize: "28px" }}
              >
                Get 25% Off
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                On AC Repair
              </Typography>
            </CardContent>

            <CardActions sx={{ padding: "0.5em" }}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                sx={{ backgroundColor: "#D2FCFC", color: "black", fontWeight: "700" }}
              >
                Book Now
              </Button>
            </CardActions>
            {/* <Box>
            <Typography variant="h1" component="h3">
              Get 20% off
            </Typography>
            <Typography>On AC Repairs</Typography>
            <Button>Book Now</Button>
          </Box> */}
          </Grid>
          <Grid item xs={5} lg={5}>
            <Box>
              <img src={featuredImage} width="162px" />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>

    // <Paper
    //   sx={{
    //     width: "100%",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     borderRadius: "15px",
    //     padding: "1em",
    //   }}
    // >
    //   <Box>
    //     <Typography variant="h1" component="h3">
    //       Get 20% off
    //     </Typography>
    //     <Typography>On AC Repairs</Typography>
    //     <Button>Book Now</Button>
    //   </Box>
    //   <Box >
    //     <img src={featuredImage} />
    //   </Box>
    // </Paper>
  );
};
export default FeaturedOffer;

// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";

// export default function MediaControlCard() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: "flex" }}>
//       <Box sx={{ display: "flex", flexDirection: "column" }}>
//         <CardContent sx={{ flex: "1 0 auto" }}>
//           <Typography component="div" variant="h5">
//             Get 25% Off
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             On AC Repair
//           </Typography>
//         </CardContent>
// <CardActions>
//   <Button size="small" color="primary">
//     Share
//   </Button>
// </CardActions>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image={featuredImage}
//         alt="Live from space album cover"
//       />
//     </Card>
//   );
// }
