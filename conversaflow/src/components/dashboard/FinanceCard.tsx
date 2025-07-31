import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

interface FinanceCardProps {
  title: string;
  amount: string;
  profit: number;
  totalEarning: number;
  target: number;
}

export const FinanceCard: React.FC<FinanceCardProps> = ({
  title,
  amount,
  profit,
  totalEarning,
  target,
}) => {
  const profitPercentage = (profit / target) * 100;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          {amount}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <LinearProgress
            variant="determinate"
            value={profitPercentage}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: '#E0E7FF',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(90deg, #6366F1 0%, #A5B4FC 100%)',
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#6366F1',
              }}
            />
            <Typography variant="caption" color="text.secondary">
              Profit
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#A5B4FC',
              }}
            />
            <Typography variant="caption" color="text.secondary">
              Total Earning
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#E0E7FF',
              }}
            />
            <Typography variant="caption" color="text.secondary">
              Total Target
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};