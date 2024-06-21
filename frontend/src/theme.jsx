import { colors, createTheme } from "@mui/material";

// const palette = () => {
// palette: {
//     primary: {}
// },
// createTheme;
// const theme = createTheme({
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: { variant: "dashed" },
//           style: {
//             textTransform: "none",
//             border: `2px dashed ${blue[500]}`,
//           },
//         },
//         {
//           props: { variant: "dashed", color: "secondary" },
//           style: {
//             border: `4px dashed ${red[500]}`,
//           },
//         },
//       ],
//     },
//   },
// });
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${blue[500]}`,
          },
        },
        {
          props: { variant: "", color: "" },
          style: {
            border: "4x dashed color",
          },
        },
      ],
    },
  },
});
