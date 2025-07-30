import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  period?: string;
  gradient?: boolean;
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  period,
  gradient = false,
  icon,
}) => {
  const isPositive = change && change > 0;

  return (
    <Card
      sx={{
        height: '100%',
        background: gradient
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'white',
        color: gradient ? 'white' : 'text.primary',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: gradient ? 'rgba(255,255,255,0.9)' : 'text.secondary',
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          {icon && (
            <Box
              sx={{
                backgroundColor: gradient
                  ? 'rgba(255,255,255,0.2)'
                  : 'primary.light',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {icon}
            </Box>
          )}
        </Box>

        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          {value}
        </Typography>

        {change !== undefined && (
          <Chip
            icon={isPositive ? <TrendingUp /> : <TrendingDown />}
            label={`${isPositive ? '+' : ''}${change}%`}
            size="small"
            sx={{
              backgroundColor: gradient
                ? 'rgba(255,255,255,0.2)'
                : isPositive
                ? 'success.light'
                : 'error.light',
              color: gradient ? 'white' : isPositive ? 'success.dark' : 'error.dark',
              fontWeight: 600,
            }}
          />
        )}

        {period && (
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 1,
              color: gradient ? 'rgba(255,255,255,0.8)' : 'text.secondary',
            }}
          >
            {period}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};