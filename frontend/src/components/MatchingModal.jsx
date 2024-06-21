import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  TextField,
  Paper,
  MenuList,
  MenuItem,
  createTheme,
  ThemeProvider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  Radio,
} from "@mui/material";
import { useState } from "react";
import Autosuggest from "react-autosuggest";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
// import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
// import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
// import { DatePicker } from "@mui/x-date-pickers";

import getLocations from "../utils/getLocations";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

// Create a custom theme with responsive typography settings
const theme = createTheme({
  typography: {
    formCaption: {
      fontSize: "8rem", // default for xs
      "@media (min-width:600px)": {
        fontSize: "12rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "16rem", // md
      },
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 5,
  "@media (max-width: 1000px)": {
    width: "70%",
  },
  "@media (max-width: 700px)": {
    width: "90%",
  },
};

export default function MatchingModal({ handleClose, service }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  // form data
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [budget, setBudget] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");
  const [stage, setStage] = useState(1);

  // form data errors
  const [descriptionError, setDescriptionError] = useState(false);
  const [dateTimeError, setDateTimeError] = useState(false);
  const [budgetError, setBudgetError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [requirementsError, setRequirementsError] = useState(false);
  const [paymentTermError, setPaymentTermError] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const theme = {
    container: {
      fontFamily: "Roboto, sans-serif",
      position: "relative",
      margin: "0",
      width: "100%",
      maxWidth: "600px",
    },
    input: {
      padding: "5px 0 0 0",
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
      border: "1px solid #ccc",
      borderRadius: "4px",
      zIndex: "100",
    },
    suggestion: {
      cursor: "pointer",
    },
    suggestionHighlighted: {
      background: "#f5f5f5",
    },
  };

  let places = [...getLocations.getAllCities(), ...getLocations.getAllLga()];

  // Function to fetch suggestions based on input value
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let suggestions = [];

    // Iterate through each category
    const locationSuggestions = places.filter((location) => {
      return location.name.toLowerCase().slice(0, inputLength) === inputValue;
    });

    // Add category suggestions to overall suggestions array
    suggestions = suggestions.concat(locationSuggestions.map((location) => location.name));

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

  // Handler for updating search term state when suggestion is selected
  const onChange = (event, { newValue }) => {
    setLocation(newValue);
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

  const stages = [1, 2, 3];

  // when user clicks next
  const handleNext = () => {
    let valid = true;
    if (stage === 1) {
      if (!description) {
        setDescriptionError(true);
        valid = false;
      } else {
        setDescriptionError(false);
      }
      if (!dateTime) {
        setDateTimeError(true);
        valid = false;
      } else {
        setDateTimeError(false);
      }
    } else if (stage === 2) {
      if (!location) {
        setLocationError(true);
        valid = false;
      } else {
        setLocationError(false);
      }
      if (!budget) {
        setBudgetError(true);
        valid = false;
      } else {
        setBudgetError(false);
      }
    } else if (stage === 3) {
      if (!requirements) {
        setRequirementsError(true);
        valid = false;
      } else {
        setRequirementsError(false);
      }
      if (!paymentTerm) {
        setPaymentTermError(true);
        valid = false;
      } else {
        setPaymentTermError(false);
      }
    }

    if (valid) {
      if (stage === stages.length) {
        handleSubmit();
        handleClose();
      } else {
        setStage((prevStage) => prevStage + 1);
      }
    }
  };

  // when user clicks back
  const handleBack = () => {
    if (stage === 1) {
      // If on the first step, close the modal
      handleClose();
    }
    setStage((prevStage) => prevStage - 1);
  };

  const handleSubmit = async () => {
    // event.preventDefault();
    const formData = {
      service,
      description,
      dateTime,
      budget,
      paymentTerm,
      location,
      requirements,
    };
    console.log(formData);

    try {
      const response = await fetch("/api/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const results = await response.json();
        navigate("/match-results", { state: { results } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box sx={style}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "25ch" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <ProgressBar stage={stage} stagesLength={stages.length} />
              {stage === 1 ? (
                <>
                  <Box sx={{ margin: "1em 0 1.5em 0" }}>
                    <Typography variant="h6">What do you need?</Typography>
                    <TextField
                      placeholder="Please provide more details about the specific service you need."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      fullWidth
                      multiline
                      required
                      margin="none"
                      maxRows={5}
                      sx={{ width: "100% !important" }}
                      error={descriptionError}
                      helperText={descriptionError && "This field is required."}
                    />
                  </Box>
                  <Box sx={{ margin: "1em 0 1.5em 0" }}>
                    <Typography variant="h6">
                      When do you need this service to be completed?
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        sx={{ width: "230px !important" }}
                        defaultValue={dayjs("2024-01-01T12:00")}
                        // label="Choose Date and Time"
                        dateTime={dateTime}
                        onChange={(newValue) => {
                          setDateTime(newValue);
                        }}
                        error={dateTimeError}
                        helperText={dateTimeError && "This field is required."}
                      />
                    </LocalizationProvider>
                  </Box>
                </>
              ) : stage === 2 ? (
                <>
                  <Box sx={{ margin: "1em 0 1.5em 0" }}>
                    <Typography variant="h6">Where do you want the service?</Typography>
                    <Autosuggest
                      theme={theme}
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                      onSuggestionsClearRequested={onSuggestionsClearRequested}
                      getSuggestionValue={(suggestion) => suggestion}
                      renderSuggestion={renderSuggestion}
                      inputProps={{
                        placeholder: "Choose location",
                        value: location,
                        onChange: onChange,
                        variant: "outlined",
                        size: "small",
                        sx: { width: "70%" },
                        error: locationError,
                        helperText: locationError && "This field is required.",
                      }}
                      renderInputComponent={(inputProps) => <TextField {...inputProps} />}
                      renderSuggestionsContainer={(options) => (
                        <Paper {...options.containerProps} square>
                          {options.children}
                        </Paper>
                      )}
                    />
                  </Box>
                  <Box sx={{ margin: "1em 0 1.5em 0" }}>
                    <Typography variant="h6">
                      Do you have a budget in mind for this service?
                    </Typography>
                    {/* (e.g., approximate range, fixed budget) */}
                    <TextField
                      placeholder="If yes, what's your budget?"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      fullWidth
                      required
                      margin="none"
                      maxRows={5}
                      sx={{ width: "100% !important" }}
                      error={budgetError}
                      helperText={budgetError && "This field is required."}
                    />
                  </Box>
                </>
              ) : stage === 3 ? (
                <>
                  <Box sx={{ margin: "1em 0 1.5em 0" }}>
                    <Typography variant="h6">
                      Are there any specific requirements or considerations that the service
                      provider should know?
                    </Typography>

                    <TextField
                      label="Please provide more details?"
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      fullWidth
                      multiline
                      required
                      maxRows={5}
                      sx={{ width: "100% !important" }}
                      error={requirementsError}
                      helperText={
                        requirementsError &&
                        "Please input any specific requirements, this helps the service provider prepare better"
                      }
                    />
                  </Box>
                  <Box sx={{ margin: "1em 0 1.5em 0" }}>
                    <Typography variant="h6">What are your preferred payment terms?</Typography>
                    <FormControl component="fieldset">
                      {/* <FormLabel component="legend">
                        What are your preferred payment terms?
                      </FormLabel> */}
                      <RadioGroup
                        aria-label="paymentTerm"
                        name="paymentTerm"
                        value={paymentTerm}
                        onChange={(e) => setPaymentTerm(e.target.value)}
                      >
                        <FormHelperText>
                          {paymentTermError && "Please choose a payment term"}
                        </FormHelperText>
                        <div>
                          <Radio value="Upfront Deposit" />
                          Upfront Deposit
                        </div>
                        <div>
                          <Radio value="Upon Completion" />
                          Upon Completion
                        </div>
                        <div>
                          <Radio value="Payment on milestone" />
                          Payment on milestone
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </>
              ) : null}

              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "1em" }}>
                <Button variant="contained" color="warning" onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {stage === stages.length ? "Submit" : "Next"}
                </Button>
              </Box>
            </Box>
            <Typography></Typography>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
}

// (e.g.,
// upfront deposit, milestone payments, upon completion)
// (e.g.,
// accessibility needs, special instructions)
// What is the scope of work or project you have in mind? (e.g.,
// one-time service, ongoing maintenance, full renovation)
// When do you need this service to
//             be completed? (e.g., urgently, within a week, flexible) Where do you need the service to
//             be performed? (e.g., address, city, postal code) Do you have a budget in mind for this
//             service? (e.g., approximate range, fixed budget) How would you like service providers to
//             contact you? (e.g., email, phone, through the platform) Are there any specific
//             requirements or considerations that the service provider should know? (e.g.,
//             accessibility needs, special instructions) What are your preferred payment terms? (e.g.,
//             upfront deposit, milestone payments, upon completion)
