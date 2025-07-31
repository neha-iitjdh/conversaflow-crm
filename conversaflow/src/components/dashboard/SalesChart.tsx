import React from 'react';
import { Card, CardContent, Typography, Box, ButtonGroup, Button } from '@mui/material';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { salesData } from '@/services/mockData';

export const SalesChart: React.FC = () => {
  const [view, setView] = React.useState<'year' | 'month'>('year');

  // Transform data for bubble chart visualization
  const chartData = salesData.map((item, index) => ({
    month: item.month,
    x: index,
    sales: item.sales,
    insight: item.insight,
  }));

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            Sales Summary
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <ButtonGroup size="small">
              <Button
                variant={view === 'year' ? 'contained' : 'outlined'}
                onClick={() => setView('year')}
              >
                This Year
              </Button>
              <Button
                variant={view === 'month' ? 'contained' : 'outlined'}
                onClick={() => setView('month')}
              >
                Summary
              </Button>
            </ButtonGroup>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#6366F1',
              }}
            />
            <Typography variant="body2" color="text.secondary">
              Sales
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#A5B4FC',
              }}
            />
            <Typography variant="body2" color="text.secondary">
              Insight
            </Typography>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              type="category"
              dataKey="month"
              data={chartData.map((d) => d.month)}
              stroke="#94A3B8"
            />
            <YAxis
              type="number"
              stroke="#94A3B8"
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip
              formatter={(value: number) => `$${value.toLocaleString()}`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Scatter
              name="Sales"
              data={chartData}
              fill="#6366F1"
              shape="circle"
            />
            <Scatter
              name="Insight"
              data={chartData.map((d) => ({ ...d, sales: d.insight }))}
              fill="#A5B4FC"
              shape="circle"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};