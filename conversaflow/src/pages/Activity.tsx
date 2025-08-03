import React from 'react';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import { Settings, FilterList, Refresh } from '@mui/icons-material';
import { ActivityStats } from '@/components/activity/ActivityStats';
import { ActivityFeed } from '@/components/activity/ActivityFeed';

export const Activity: React.FC = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Track all activities and user actions
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button
            startIcon={<FilterList />}
            variant="outlined"
            size="small"
            sx={{ textTransform: 'none' }}
          >
            Filter
          </Button>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </Box>
      </Box>

      {/* Statistics */}
      <ActivityStats />

      {/* Activity Feed */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ActivityFeed />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: 'primary.light',
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Activity Insights
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your team has been 23% more active this week compared to last
              week. Keep up the great work!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};