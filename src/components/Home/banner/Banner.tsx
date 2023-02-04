import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <Image
        src="/banner.png"
        alt="Picture of the author"
        width={240}
        height={192}
      />
    </Box>
  );
};

export default Banner;
