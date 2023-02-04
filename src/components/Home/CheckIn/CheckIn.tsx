import React from "react";
import { Box, Button } from "@mui/material";

function CheckIn() {
  return (
    <div>
      <Box
        display={"flex"}
        padding={"16px"}
        justifyContent={"space-between"}
        sx={{
          backgroundColor: "background.paper",
          width: "240px",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 5%)",
        }}
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
      </Box>
    </div>
  );
}

export default CheckIn;
