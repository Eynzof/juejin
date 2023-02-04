import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";

function AuthorRank() {
  return (
    <Box sx={{ backgroundColor: "background.paper", width: "240px" }}>
      <Box sx={{ padding: "12px 16px", fontSize: "14px" }}>🎖️作者榜</Box>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 240, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="./avatar.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="why技术"
            sx={{ fontSize: "12px" }}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "12px" }}
                component="span"
                variant="body2"
                color="text.disabled"
              >
                java工程师 @ 公众号..
              </Typography>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="./avatar.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="why技术"
            sx={{ fontSize: "12px" }}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "12px" }}
                component="span"
                variant="body2"
                color="text.disabled"
              >
                java工程师 @ 公众号..
              </Typography>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="./avatar.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="why技术"
            sx={{ fontSize: "12px" }}
            secondary={
              <Typography
                sx={{ display: "inline", fontSize: "12px" }}
                component="span"
                variant="body2"
                color="text.disabled"
              >
                java工程师 @ 公众号..
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default AuthorRank;
