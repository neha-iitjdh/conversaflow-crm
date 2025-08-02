import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export const TopProductsChart: React.FC = () => {
  const [period, setPeriod] = React.useState('daily');

  const data = [
    { name: 'T-shirt', value: 146 },
    { name: 'Pants', value: 109 },
    { name: 'Jacket', value: 75 },
  ];

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Top 3 Product
          </Typography>
          <Button
            size="small"
            variant="text"
            sx={{ textTransform: 'none' }}
            onClick={() =>
              setPeriod(period === 'daily' ? 'weekly' : 'daily')
            }
          >
            Daily
          </Button>
        </Box>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="name" stroke="#94A3B8" tick={{ fontSize: 12 }} />
            <YAxis stroke="#94A3B8" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Bar
                  key={`bar-${index}`}
                  dataKey="value"
                  fill={
                    index === 0
                      ? '#6366F1'
                      : index === 1
                      ? '#A5B4FC'
                      : '#06B6D4'
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Legend */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor:
                    index === 0
                      ? '#6366F1'
                      : index === 1
                      ? '#A5B4FC'
                      : '#06B6D4',
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};