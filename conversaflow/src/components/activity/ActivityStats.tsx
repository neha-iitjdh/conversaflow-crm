import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import {
  TrendingUp,
  Assignment,
  CheckCircle,
  People,
} from '@mui/icons-material';

export const ActivityStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Activities',
      value: '1,234',
      change: '+12.5%',
      icon: <Assignment />,
      color: '#6366F1',
    },
    {
      title: 'Completed Tasks',
      value: '856',
      change: '+8.2%',
      icon: <CheckCircle />,
      color: '#10B981',
    },
    {
      title: 'Active Users',
      value: '342',
      change: '+15.3%',
      icon: <People />,
      color: '#F59E0B',
    },
    {
      title: 'Growth Rate',
      value: '23.8%',
      change: '+3.1%',
      icon: <TrendingUp />,
      color: '#06B6D4',
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 3 }}>
      {stats.map((stat, index) => (
        <Card key={index} sx={{ flex: '1 1 calc(25% - 24px)', minWidth: 200 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 2,
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                {stat.title}
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: `${stat.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: stat.color,
                }}
              >
                {stat.icon}
              </Box>
            </Box>
            <Typography variant="h4" fontWeight={700}>
              {stat.value}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'success.main', fontWeight: 600, mt: 1 }}
            >
              {stat.change} from last month
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};