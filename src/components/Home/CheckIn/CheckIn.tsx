import React from "react";
import { Box, Button } from "@mui/material";
import SnippetContainer from "../../Universal/SnippetContainer";

function CheckIn() {
  return (
    <div>
      <SnippetContainer
        display={"flex"}
        padding={"16px"}
        justifyContent={"space-between"}
      >
        <Box>
          <Box
            sx={{
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "600",
              color: "text.secondary",
            }}
          >
            晚上好!
          </Box>
          <Box sx={{ fontSize: 12, color: "text.secondary" }}>
            点亮在社区的每一天
          </Box>
        </Box>
        <Button variant="outlined" size="small">
          去签到
        </Button>
      </SnippetContainer>
    </div>
  );
}

export default CheckIn;
