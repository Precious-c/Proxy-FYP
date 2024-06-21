import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
//mui imports
import Container from "@mui/material/Container";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

//pages import
import Landingpage from "./pages/Landingpage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage/Signup";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import { Profile } from "./pages/ProfilePage/Profile";
import TopAppBar from "./components/TopAppBar";
import { grey } from "@mui/material/colors";
import BottomAppBar from "./components/BottomAppBar";
import Category from "./pages/CategoryPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import MatchingModal from "./components/MatchingModal";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem", // default for xs
      "@media (min-width:600px)": {
        fontSize: "2.5rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "3rem", // md
      },
      "@media (min-width:1200px)": {
        fontSize: "3.5rem", // lg
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.25rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.125rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.25rem",
      },
    },
    body2: {
      fontSize: "0.75rem",
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.125rem",
      },
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          // maxWidth="xl"
          sx={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "#F0F0F0", width: "100%" }}
        >
          <TopAppBar />
          <Router>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/search/:location/:searchTerm" element={<SearchResultsPage />} /> */}
              <Route path="/match" element={<MatchingModal />} />
              <Route path="/match-results" element={<SearchResultsPage />} />
            </Routes>
          </Router>
          {/* <BottomAppBar /> */}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
