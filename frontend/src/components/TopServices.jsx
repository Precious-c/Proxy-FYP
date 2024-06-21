//mui imports
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//component imports
import TopServicesCard from "./ServiceCard";

// images import
import acRepairImg from "../assets/top-services/ac-repair.jpg";
import boreholeDrillingImg from "../assets/top-services/borehole-drilling.jpg";
import carpenterImg from "../assets/top-services/carpenter.jpg";
import dispatchImg from "../assets/top-services/dispatch.jpg";
import movingServicesImg from "../assets/top-services/moving-services.jpeg";
import plumberImg from "../assets/top-services/plumber.jpg";
import solarInstallationImg from "../assets/top-services/solar-installation.jpg";
import tilingImg from "../assets/top-services/tiling.jpg";

// Create a custom theme with responsive typography settings
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

// Mock data
const TopServicesData = [
  {
    serviceId: 1,
    serviceName: "AC Repairs",
    providerName: "Ace Mayers",
    img: acRepairImg,
    url: "/service/id",
    price: "100k",
    rating: 4.5,
    title: "",
    discount: 20,
  },
  {
    serviceId: 2,
    serviceName: "Borehole Drilling",
    providerName: "Drilling Company",
    img: boreholeDrillingImg,
    url: "/service/id",
    price: "100k",
    rating: 3.6,
    title: "",
    discount: 20,
  },
  {
    serviceId: 3,
    serviceName: "Carpenter",
    providerName: "Carpenter Company",
    img: carpenterImg,
    url: "/service/id",
    price: "100k",
    rating: 3,
    title: "",
    discount: 20,
  },
  {
    serviceId: 4,
    serviceName: "Dispatch",
    providerName: "Dispatch Company",
    img: dispatchImg,
    url: "/service/id",
    price: "100k",
    rating: 5,
    title: "",
    discount: 20,
  },
  {
    serviceId: 5,
    serviceName: "Moving Services",
    providerName: "Moving Company",
    img: movingServicesImg,
    url: "/service/id",
    price: "100k",
    rating: 3.8,
    title: "",
    discount: 20,
  },
  {
    serviceId: 6,
    serviceName: "Plumber",
    providerName: "Plumber Company",
    img: plumberImg,
    url: "/service/id",
    price: "100k",
    rating: 4,
    title: "",
    discount: 20,
  },
  {
    serviceId: 7,
    serviceName: "Solar Installation",
    providerName: "Solar Company",
    img: solarInstallationImg,
    url: "/service/id",
    price: "100k",
    rating: 4.5,
    title: "",
    discount: 20,
  },
  {
    serviceId: 8,
    serviceName: "Tiling",
    providerName: "Tiling Company",
    img: tilingImg,
    url: "/service/id",
    price: "100k",
    rating: 2.5,
    title: "",
    discount: 20,
  },
];

const TopServices = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        xs={12}
        sx={{
          width: "100%",
          padding: "0 0.6em 0 2em",
          "@media (min-width: 900px)": {
            // paddingRight: "5.7rem",
            // paddingLeft: "5.7rem",
            padding: "0 4.3em 0 5.7em",
          },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "700", fontSize: "20px", marginBottom: "1em" }}
          >
            Top Services
          </Typography>

          <Grid container spacing={2}>
            {TopServicesData.map((service) => (
              <TopServicesCard key={service.serviceId} service={service} />
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default TopServices;
