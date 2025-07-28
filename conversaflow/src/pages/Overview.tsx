import React from "react";
import { Box, Typography } from "@mui/material";

export const Overview: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Sales Overview
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Let's see the current statistic performance.
      </Typography>
    </Box>
  );
};
