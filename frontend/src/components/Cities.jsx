//mui imports
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Unstable_Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

const popularCities = [
  {
    id: 1,
    state: "Cross River State",
    cities: [
      { id: 101, name: "Eta Agbor" },
      { id: 102, name: "Marian" },
      { id: 103, name: "Ikom" },
      { id: 104, name: "Ogoja" },
      { id: 105, name: "Ugep" },
      { id: 106, name: "Obudu" },
      { id: 107, name: "Calabar South" },
    ],
  },
  {
    id: 2,
    state: "Akwa Ibom State",
    cities: [
      { id: 201, name: "Uyo" },
      { id: 202, name: "Eket" },
      { id: 203, name: "Ikot Ekpene" },
      { id: 204, name: "Oron" },
      { id: 205, name: "Abak" },
      { id: 206, name: "Itam" },
      { id: 207, name: "Nsukara" },
      { id: 208, name: "Nwaniba" },
      { id: 209, name: "Ikot Oku Ikono" },
    ],
  },
  {
    id: 3,
    state: "Rivers State",
    cities: [
      { id: 301, name: "Port Harcourt" },
      { id: 302, name: "Igwuruta" },
      { id: 303, name: "Bonny" },
      { id: 304, name: "Eleme" },
      { id: 305, name: "Ahoada" },
      { id: 306, name: "Omoku" },
      { id: 307, name: "Port Harcourt Township" },
      { id: 308, name: "GRA" },
      { id: 309, name: "Diobu" },
      { id: 310, name: "Trans Amadi" },
      { id: 311, name: "Rumukoro" },
      { id: 312, name: "Rumuomasi" },
      { id: 313, name: "Rumuokoro" },
      { id: 314, name: "Eleme" },
      { id: 315, name: "Okrika" },
      { id: 316, name: "Obio-Akpor" },
      { id: 317, name: "Bonny" },
      { id: 318, name: "Choba" },
      { id: 319, name: "Aluu" },
      { id: 320, name: "Oyigbo" },
      { id: 321, name: "Elelenwo" },
    ],
  },
  {
    id: 4,
    state: "Abia State",
    cities: [
      { id: 401, name: "Aba" },
      { id: 402, name: "Umuahia" },
      { id: 403, name: "Ohafia" },
      { id: 404, name: "Arochukwu" },
      { id: 405, name: "Bende" },
    ],
  },
];

const Cities = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate(`/professionals/${event.target.textContent}`);
    console.log(event);
  };
  return (
    // <ThemeProvider theme={theme}>
    <Box
      xs={12}
      sx={{
        width: "100%",
        marginBottom: "2em",
        marginTop: "2em",
        padding: "0 2em ",
        "@media (min-width: 900px)": {
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
          Top Cities
        </Typography>
        <Grid container spacing={2} sx={{ alignItems: "flex-start" }}>
          {popularCities.map((state) => (
            <Grid item xs={12} sm={12} md={12} key={state.id}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: "700", fontSize: "16px", marginBottom: "0.2em" }}
              >
                {state.state}
              </Typography>

              <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {state.cities.map((city) => (
                  <li
                    key={city.id}
                    id={city.id}
                    style={{
                      display: "flex",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                  >
                    <Typography variant="body1" component="span">
                      {city.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    // </ThemeProvider>
  );
};

export default Cities;
