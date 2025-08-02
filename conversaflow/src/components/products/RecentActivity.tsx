import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from '@mui/material';
import { ArrowUpward, ArrowDownward, ArrowForward } from '@mui/icons-material';

interface Activity {
  id: string;
  type: 'outgoing' | 'incoming';
  product: string;
  quantity: number;
  price: number;
  time: string;
}

export const RecentActivity: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'outgoing',
      product: 'Stone Black Jacket',
      quantity: 3,
      price: 1500,
      time: '2 minutes ago',
    },
    {
      id: '2',
      type: 'incoming',
      product: 'Capital Creme',
      quantity: 1,
      price: 1200,
      time: '5 minutes ago',
    },
  ];

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Recent Activity
          </Typography>
          <IconButton size="small">
            <ArrowForward />
          </IconButton>
        </Box>

        {/* Outgoing Products */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowUpward sx={{ fontSize: 18, color: 'primary.main' }} />
            </Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Outgoing products
            </Typography>
          </Box>

          {activities
            .filter((a) => a.type === 'outgoing')
            .map((activity) => (
              <Box
                key={activity.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  backgroundColor: 'action.hover',
                  borderRadius: 2,
                  mb: 1,
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: 'background.paper',
                  }}
                >
                  🧥
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight={600}>
                    {activity.product}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Qty: {activity.quantity} • {activity.time}
                  </Typography>
                </Box>
                <Typography variant="body2" fontWeight={600}>
                  ${activity.price}
                </Typography>
              </Box>
            ))}
        </Box>

        {/* Incoming Products */}
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: 'secondary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowDownward sx={{ fontSize: 18, color: 'secondary.main' }} />
            </Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Incoming products
            </Typography>
          </Box>

          {activities
            .filter((a) => a.type === 'incoming')
            .map((activity) => (
              <Box
                key={activity.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  backgroundColor: 'action.hover',
                  borderRadius: 2,
                  mb: 1,
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: 'background.paper',
                  }}
                >
                  👕
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight={600}>
                    {activity.product}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Qty: {activity.quantity} • {activity.time}
                  </Typography>
                </Box>
                <Typography variant="body2" fontWeight={600}>
                  ${activity.price}
                </Typography>
              </Box>
            ))}
        </Box>
      </CardContent>
    </Card>
  );
};