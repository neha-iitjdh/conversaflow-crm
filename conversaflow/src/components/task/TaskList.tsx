import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Checkbox,
  Chip,
  Avatar,
  AvatarGroup,
  LinearProgress,
} from '@mui/material';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'completed';
  assignees: string[];
  dueDate: string;
  progress: number;
}

interface TaskListProps {
  tasks: Task[];
  title: string;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, title }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

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
            {title}
          </Typography>
          <Chip label={tasks.length} size="small" color="primary" />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {tasks.map((task) => (
            <Box
              key={task.id}
              sx={{
                p: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Checkbox
                  checked={task.status === 'completed'}
                  sx={{ mt: -1 }}
                />
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{
                        textDecoration:
                          task.status === 'completed'
                            ? 'line-through'
                            : 'none',
                      }}
                    >
                      {task.title}
                    </Typography>
                    <Chip
                      label={task.priority}
                      size="small"
                      color={getPriorityColor(task.priority) as any}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {task.description}
                  </Typography>

                  {/* Progress Bar */}
                  {task.status === 'in-progress' && (
                    <Box sx={{ mb: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={task.progress}
                        sx={{ height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {task.progress}% completed
                      </Typography>
                    </Box>
                  )}

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 28, height: 28 } }}>
                      {task.assignees.map((_, index) => (
                        <Avatar
                          key={index}
                          src={`https://i.pravatar.cc/150?img=${index + 30}`}
                          sx={{ width: 28, height: 28 }}
                        />
                      ))}
                    </AvatarGroup>
                    <Typography variant="caption" color="text.secondary">
                      Due: {task.dueDate}
                    </Typography>
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