// import React from "react";
// import { Box, Typography } from "@mui/material";

// export const Overview: React.FC = () => {
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Sales Overview
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         Let's see the current statistic performance.
//       </Typography>
//     </Box>
//   );
// };

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import {
  CalendarToday,
  Settings,
  FileDownload,
  TrendingUp,
} from "@mui/icons-material";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { CategoryChart } from "@/components/dashboard/CategoryChart";
import { FinanceCard } from "@/components/dashboard/FinanceCard";
import { SubNavTabs } from "@/components/dashboard/SubNavTabs";

export const Overview: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("Summary");

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Sales Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Let's see the current statistic performance.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton>
            <FileDownload />
          </IconButton>
          <Typography variant="body2" fontWeight={600}>
            Export Data
          </Typography>
          <IconButton>
            <Settings />
          </IconButton>
        </Box>
      </Box>

      {/* Sub Navigation */}
      <SubNavTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Date Range */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
          justifyContent: "flex-end",
        }}
      >
        <CalendarToday sx={{ fontSize: 20, color: "text.secondary" }} />
        <Typography variant="body2" color="text.secondary">
          1 June 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
          -
        </Typography>
        <Typography variant="body2" color="text.secondary">
          15 June 2024
        </Typography>
      </Box>

      {/* Metrics Grid */}
      <Grid container spacing={3}>
        {/* Top Row - Main Metrics */}
        <Grid item xs={12} md={4}>
          <MetricCard
            title="Overall Revenue"
            value="$25,912"
            change={1.9}
            period="Than last month"
            gradient
            icon={<TrendingUp />}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <MetricCard
            title="Total Insight"
            value="129,521"
            change={1.2}
            period="Than last month"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FinanceCard
            title="Finance Balance"
            amount="$9,421,642"
            profit={9421642}
            totalEarning={15000000}
            target={20000000}
          />
        </Grid>

        {/* Bottom Row - Charts */}
        <Grid item xs={12} md={8}>
          <SalesChart />
        </Grid>

        <Grid item xs={12} md={4}>
          <CategoryChart />
        </Grid>
      </Grid>
    </Box>
  );
};
