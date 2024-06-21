import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Import custom icons
import chooseIcon from "../assets/icons/choose-48.png";
import messageIcon from "../assets/icons/comments-48.png";
import compareIcon from "../assets/icons/compare-48.png";
import successIcon from "../assets/icons/success.png";
import { Box } from "@mui/material";

// Create a custom theme with responsive typography settings
const theme = createTheme({
  typography: {
    title: {
      fontSize: "1rem", // default for xs
      "@media (min-width:600px)": {
        fontSize: "1.2rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "24px", // md
      },
    },
  },
});

const steps = [
  {
    label: "1. Tell us what your needs",
    icon: messageIcon,
    description: `Tell us what service you're looking for and where you need it. Whether it's a home
  repair, tutoring session, or beauty service, we connect you with local proffessionals
  who are ready to help.`,
  },
  {
    label: "2. Receive and Compare Quotes",
    icon: compareIcon,
    description: `Get a list of interested contractors and service providers who are available for your
  project. Review their profiles, ratings, and quotes. Compare them based on their
  qualifications and user ratings.`,
  },
  {
    label: "3. Choose the Best Provider",
    icon: chooseIcon,
    description: `Compare ratings, prices, and availability to find the best match for your requirements.
  Proxy offers insights including advice, cost estimates, and user ratings to assist in
  your decision-making process.`,
  },
  {
    label: "4. Book with Confidence",
    icon: successIcon,
    description: `Once you've found the right provider, book their services with confidence. Proxy ensures
  secure transactions and transparent communication throughout the process, backed by our
  satisfaction guarantee.`,
  },
];

const HowItWorks = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        xs={12}
        sx={{
          width: "100%",
          backgroundColor: "#f5f5f2",

          padding: "0 0.6em 0 2em",
          "@media (min-width: 900px)": {
            padding: "0 4.3em 0 5.7em",
          },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "700", fontSize: "24px", marginBottom: "30px", marginTop: "30px" }}
        >
          How it works
        </Typography>
        <Grid container spacing={6}>
          {steps.map((step, index) => {
            return (
              <Grid key={index} item xs={12} lg={6}>
                <img
                  src={step.icon}
                  alt={`${step.label} icon`}
                  width="48px"
                  style={{ marginBottom: "20px" }}
                />

                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "22.8px",
                    color: "#282827",
                    letterSpacing: "0.36",
                    marginBottom: "16px",
                  }}
                >
                  {step.label}
                </Typography>
                <Typography sx={{ fontSize: "16px", lineHeight: "22.4px", color: "282827" }}>
                  {step.description}
                </Typography>
              </Grid>
            );
          })}

          {/* <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Receive and Compare Quotes
          </Typography>
          <Typography>
            Get a list of interested contractors and service providers who are available for your
            project. Review their profiles, ratings, and quotes. Compare them based on their
            qualifications and user ratings.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Choose the Best Provider
          </Typography>
          <Typography>
            Compare ratings, prices, and availability to find the best match for your requirements.
            Proxy offers insights including advice, cost estimates, and user ratings to assist in
            your decision-making process.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Book with Confidence
          </Typography>
          <Typography>
            Once you've found the right provider, book their services with confidence. Proxy ensures
            secure transactions and transparent communication throughout the process, backed by our
            satisfaction guarantee.
          </Typography>*/}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HowItWorks;
