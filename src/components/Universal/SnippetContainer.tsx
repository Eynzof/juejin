import React from "react";
import { Box, styled } from "@mui/material";

const SnippetContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "240px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 5%)",
}));

export default SnippetContainer;
