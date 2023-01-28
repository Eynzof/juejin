import React, {useState} from "react";
import {
  alpha,
  Box,
  Button,
  Divider,
  Link,
  Slider,
  styled,
  Tabs,
} from "@mui/material";
import styles from "./ArticleNavigation.module.css";

const TabKey = styled(Link)(({theme}) => ({
  color: theme.palette.text.disabled,
  padding: "0 12px",
  fontSize: "14px",
  textDecoration: "none",
}));

function ArticleNavigation() {

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Box sx={{borderBottom: "1px solid", borderColor: "divider"}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          bgcolor: "background.paper",
          color: "text.disabled",
          padding: "12px 12px",
        }}
      >
        <TabKey>推荐</TabKey>
        <Divider orientation="vertical" variant="fullWidth" flexItem/>
        <TabKey>最新</TabKey>
        <Divider orientation="vertical" variant="fullWidth" flexItem/>
        <TabKey>热榜</TabKey>
      </Box>
    </Box>
  );
}

export default ArticleNavigation;
