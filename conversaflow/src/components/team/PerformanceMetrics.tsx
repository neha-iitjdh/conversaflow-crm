import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

interface PerformanceMetricsProps {
  totalMembers: number;
  activeMembersToday: number;
  averageTime: string;
  change: number;
  leadsData: Array<{ name: string; value: number }>;
}

export const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
  totalMembers,
  activeMembersToday,
  averageTime,
  change,
  leadsData,
}) => {
  const timeData = [
    { time: '0', value: 4.5 },
    { time: '1', value: 3.8 },
    { time: '2', value: 4.2 },
    { time: '3', value: 3.5 },
    { time: '4', value: 4.8 },
    { time: '5', value: 3.9 },
    { time: '6', value: 4.1 },
  ];

  return (
    <Box>
      {/* Top Metrics Row */}
      <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
        {/* Total Members Card */}
        <Card sx={{ flex: 1, minWidth: 250 }}>
          <CardContent
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 2, opacity: 0.9 }}>
              Total Members
            </Typography>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 1 }}>
              {totalMembers.toLocaleString()}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              Data per 29 June 2024
            </Typography>
          </CardContent>
        </Card>

        {/* Average Time Worked Card */}
        <Card sx={{ flex: 1, minWidth: 250 }}>
          <CardContent>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Average Time Worked
            </Typography>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
              {averageTime}
            </Typography>

            {/* Mini Area Chart */}
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart data={timeData}>
                <defs>
                  <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#EF4444"
                  strokeWidth={2}
                  fill="url(#colorTime)"
                />
              </AreaChart>
            </ResponsiveContainer>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'error.main',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                {change > 0 ? <TrendingUp /> : <TrendingDown />}
                {Math.abs(change)}%
              </Box>
              <Typography variant="caption" color="text.secondary">
                Than yesterday
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Leads by Sales Card */}
        <Card sx={{ flex: 1, minWidth: 250 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                Leads by Sales
              </Typography>
              <Typography variant="caption" color="text.secondary">
                This week
              </Typography>
            </Box>

            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={leadsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" stroke="#94A3B8" tick={{ fontSize: 12 }} />
                <YAxis stroke="#94A3B8" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#6366F1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>

      {/* Total Members (Secondary) */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Total Members
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
            {activeMembersToday.toLocaleString()}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Data per 29 June 2024
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'error.main',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              <TrendingDown fontSize="small" />
              1.2%
            </Box>
            <Typography variant="caption" color="text.secondary">
              Than yesterday
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};