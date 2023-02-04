import React from "react";
import { Box, ListItemText } from "@mui/material";
import SnippetContainer from "../../Universal/SnippetContainer";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function QrCode() {
  return (
    <SnippetContainer sx={{ marginBottom: "20px" }}>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/qrcode.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </Box>

        <ListItemText
          primary="下载稀土掘金APP"
          secondary={
            <Typography
              sx={{ display: "inline", fontSize: "12px" }}
              component="span"
              variant="body2"
              color="text.disabled"
            >
              一个帮助开发者成长的社区
            </Typography>
          }
        />
      </Box>
    </SnippetContainer>
  );
}

export default QrCode;
