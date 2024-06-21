import { Box } from "@mui/material";
import React from "react";

const ProgressBar = ({ stage, stagesLength }) => {
  //   const totalWidth = 100;
  const widthPerStage = 100 / stagesLength;
  const fillWidth = widthPerStage * stage;
  const style = {
    height: "10px",
    width: `${fillWidth}%`,
    background: "blue",
    borderRadius: "20px",
  };
  console.log(style);
  return (
    <Box
      sx={{
        width: "100%",
        background: "grey",
        height: "10px",
        borderRadius: "20px",
        marginBottom: "2em",
      }}
    >
      <Box sx={style}></Box>
    </Box>
  );
};

export default ProgressBar;
