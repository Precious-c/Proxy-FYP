// import {  } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${defaultTheme.palette.primary.main}`,
            color: defaultTheme.palette.primary.main,
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `2px dashed ${defaultTheme.palette.secondary.main}`,
            color: defaultTheme.palette.secondary.main,
          },
        },
        {
          props: { variant: "dashed", size: "large" },
          style: {
            borderWidth: 4,
          },
        },
        {
          props: { variant: "dashed", color: "secondary", size: "large" },
          style: {
            fontSize: 18,
          },
        },
        {
          props: { variant: "dashed", color: "damned", size: "large" },
          style: {
            fontSize: 18,
            backgroundColor: "365E32",
          },
        },
      ],
    },
  },
});

export default function ButtonUsage({ to, text, className = "" }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" sx={{ margin: 1 }} onClick={handleClick}>
        {text}
      </Button>
    </ThemeProvider>
  );
}
// const Button = ({ link, color, text }) => {
//   return (
//     <>
//       <Button href={link} className="btn" variant="">
//         {text}
//       </Button>
//       ;
//     </>0
//   );
// };
