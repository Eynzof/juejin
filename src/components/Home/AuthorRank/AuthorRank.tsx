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
import SnippetContainer from "../../Universal/SnippetContainer";

function AuthorRank() {
  return (
    <SnippetContainer>
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
      <Divider />
      <Box
        sx={{
          color: "primary.light",
          display: "flex",
          justifyContent: "center",
          fontSize: "14px",
          padding: "12px 0",
        }}
      >
        完整榜单 {">"}
      </Box>
    </SnippetContainer>
  );
}

export default AuthorRank;
