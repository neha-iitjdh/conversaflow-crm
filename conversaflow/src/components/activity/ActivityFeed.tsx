import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  IconButton,
} from '@mui/material';
import { MoreVert, TrendingUp, TrendingDown } from '@mui/icons-material';

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  type: 'sale' | 'task' | 'update' | 'achievement';
  avatar?: string;
}

export const ActivityFeed: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      user: 'John Doe',
      action: 'completed sale',
      target: 'Stone Black Jacket',
      time: '2 minutes ago',
      type: 'sale',
    },
    {
      id: '2',
      user: 'Sarah Smith',
      action: 'updated task',
      target: 'Q4 Marketing Campaign',
      time: '15 minutes ago',
      type: 'task',
    },
    {
      id: '3',
      user: 'Mike Johnson',
      action: 'achieved milestone',
      target: '100 Sales This Month',
      time: '1 hour ago',
      type: 'achievement',
    },
    {
      id: '4',
      user: 'Emily Davis',
      action: 'updated product',
      target: 'FOG Green Short',
      time: '2 hours ago',
      type: 'update',
    },
    {
      id: '5',
      user: 'David Wilson',
      action: 'completed sale',
      target: 'Owens Black Pants',
      time: '3 hours ago',
      type: 'sale',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'sale':
        return 'success';
      case 'task':
        return 'primary';
      case 'achievement':
        return 'secondary';
      case 'update':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'sale':
        return <TrendingUp />;
      case 'achievement':
        return '🏆';
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Recent Activity
        </Typography>

        <Box sx={{ mt: 3 }}>
          {activities.map((activity, index) => (
            <Box
              key={activity.id}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                pb: 3,
                mb: 3,
                borderBottom:
                  index !== activities.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
              }}
            >
              <Avatar
                src={`https://i.pravatar.cc/150?img=${index + 20}`}
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box>
                    <Typography variant="body2">
                      <strong>{activity.user}</strong> {activity.action}{' '}
                      <strong>{activity.target}</strong>
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: 'block', mt: 0.5 }}
                    >
                      {activity.time}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={activity.type}
                      size="small"
                      color={getTypeColor(activity.type) as any}
                      icon={getTypeIcon(activity.type) as any}
                    />
                    <IconButton size="small">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};