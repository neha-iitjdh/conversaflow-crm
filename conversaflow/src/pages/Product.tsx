import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Settings, CalendarToday } from '@mui/icons-material';
import { ProductTable } from '@/components/products/ProductTable';
import { TopProductsChart } from '@/components/products/TopProductsChart';
import { RecentActivity } from '@/components/products/RecentActivity';
import { products } from '@/services/mockData';

export const Product: React.FC = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            See how your sales and products are progressing
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 20, color: 'text.secondary' }} />
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
          <IconButton>
            <Settings />
          </IconButton>
        </Box>
      </Box>

      {/* Content Grid */}
      <Grid container spacing={3}>
        {/* Left Column - Product Table */}
        <Grid item xs={12} md={8}>
          <ProductTable products={products} />
        </Grid>

        {/* Right Column - Charts & Activity */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TopProductsChart />
            <RecentActivity />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};