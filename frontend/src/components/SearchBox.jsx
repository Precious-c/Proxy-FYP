import { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import "../app.css";
import {
  IconButton,
  InputBase,
  Divider,
  Paper,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import serviceCategories from "../mockData/servicesAndCategoryData.json";
import Geolocation from "./Geolocation";
import MatchingModal from "./MatchingModal";
import { useNavigate } from "react-router-dom";

//theme for autosuggest
const theme = {
  container: {
    fontFamily: "Roboto, sans-serif",
    position: "relative",
    margin: "0 auto",
    width: "100%",
    maxWidth: "600px",
  },
  input: {
    padding: "10px",
    fontSize: "1.2rem",
    boxSizing: "border-box",
    width: "100%",
  },
  suggestionsContainer: {
    position: "absolute",
    top: "40px",
    left: "0",
    right: "0",
    maxHeight: "200px",
    overflowY: "auto",
    // background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    zIndex: "100",
    // width: "80%",
  },
  suggestion: {
    // padding: "10px",
    // fontSize: "16px",
    cursor: "pointer",
  },
  suggestionHighlighted: {
    background: "#f5f5f5",
  },
};

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [getLocation, setGetLocation] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  // Function to fetch suggestions based on input value
  const getSuggestions = (value) => {
    console.log("value", value);
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let suggestions = [];

    // Iterate through each category
    serviceCategories.forEach((category) => {
      const categorySuggestions = category.services.filter((service) => {
        return service.name.toLowerCase().slice(0, inputLength) === inputValue;
      });

      // Add category suggestions to overall suggestions array
      suggestions = suggestions.concat(categorySuggestions.map((service) => service.name));
    });

    return inputLength === 0 ? [] : suggestions;
  };

  // Function to handle fetching suggestions when input value changes
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Function to clear suggestions when input value is cleared
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Effect to fetch user's geolocation when getLocation state changes
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }
    if (getLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          setLocation({
            latitude: postion.coords.latitude,
            longitude: postion.coords.longitude,
          });
        },
        (error) => {
          console.error("Error retrieving location:", error.message);
        }
      );
    }
  }, [getLocation]);

  // Handler for search term input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler for zip code input change
  const handleZipChange = (event) => {
    setZipCode(event.target.value);
  };

  // Handler for performing search
  const handleSubmit = () => {
    // Perform search action here
    // onSearch(searchTerm, zipCode);
    // console.log("handling submit"), (<MatchingModal />);
    // navigate("/match");
    setOpen(true);
  };

  // Handler for fetching user's geolocation
  const handleGetLocation = () => {
    console.log("User's location:", location);
    setGetLocation(true);
  };

  // Handler for updating search term state when suggestion is selected
  const onChange = (event, { newValue }) => {
    setSearchTerm(newValue);
  };

  // Render function for each suggestion
  const renderSuggestion = (suggestion) => {
    return (
      <MenuList>
        <MenuItem>
          <Typography variant="inherit">{suggestion}</Typography>
        </MenuItem>
      </MenuList>
    );
  };

  //Modal
  const handleOpen = () => setOpen(true);

  // close modal
  const handleClose = () => setOpen(false);

  return (
    <Paper
      component="form"
      sx={{
        p: "10px 5px",
        m: "2em auto",
        display: "flex",
        height: "55px",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: "30px",
        width: { xs: "80%", md: "60%" },
      }}
    >
      {/* <Geolocation /> */}
      {open && <MatchingModal handleClose={handleClose} service={searchTerm} />}
      <IconButton onClick={handleGetLocation}>
        <LocationOnIcon />
      </IconButton>
      <InputBase
        value={zipCode}
        onChange={handleZipChange}
        placeholder="Zip Code"
        variant="standard"
        size="small"
        sx={{ width: "20%" }}
      />
      <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />
      <Autosuggest
        theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: "What service do you need",
          value: searchTerm,
          onChange: onChange,
          variant: "outlined",
          size: "small",
          sx: { width: "70%" },
          endAdornment: (
            <IconButton onClick={handleSubmit}>
              <SearchIcon />
            </IconButton>
          ),
        }}
        renderInputComponent={(inputProps) => <InputBase {...inputProps} />}
        renderSuggestionsContainer={(options) => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
      {/* <InputBase
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        variant="outlined"
        size="small"
        sx={{ width: "70%" }}
      />

      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton> */}
    </Paper>
  );
};

export default SearchBox;

// 09031475130
