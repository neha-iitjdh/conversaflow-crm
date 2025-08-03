import React from 'react';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import { Settings, Add, ViewKanban } from '@mui/icons-material';
import { TaskList } from '@/components/task/TaskList';

export const Task: React.FC = () => {
  const todoTasks = [
    {
      id: '1',
      title: 'Design new landing page',
      description: 'Create mockups for the new product landing page',
      priority: 'high' as const,
      status: 'todo' as const,
      assignees: ['user1', 'user2'],
      dueDate: 'Dec 15, 2024',
      progress: 0,
    },
    {
      id: '2',
      title: 'Update documentation',
      description: 'Update API documentation for v2.0',
      priority: 'medium' as const,
      status: 'todo' as const,
      assignees: ['user3'],
      dueDate: 'Dec 20, 2024',
      progress: 0,
    },
  ];

  const inProgressTasks = [
    {
      id: '3',
      title: 'Implement user dashboard',
      description: 'Build the main user dashboard with analytics',
      priority: 'high' as const,
      status: 'in-progress' as const,
      assignees: ['user1', 'user4'],
      dueDate: 'Dec 10, 2024',
      progress: 65,
    },
    {
      id: '4',
      title: 'Bug fixes for mobile app',
      description: 'Fix reported bugs in the mobile application',
      priority: 'medium' as const,
      status: 'in-progress' as const,
      assignees: ['user2', 'user3'],
      dueDate: 'Dec 12, 2024',
      progress: 40,
    },
  ];

  const completedTasks = [
    {
      id: '5',
      title: 'Setup CI/CD pipeline',
      description: 'Configure automated deployment pipeline',
      priority: 'high' as const,
      status: 'completed' as const,
      assignees: ['user4'],
      dueDate: 'Dec 1, 2024',
      progress: 100,
    },
    {
      id: '6',
      title: 'Code review for PR #234',
      description: 'Review and approve the authentication feature PR',
      priority: 'low' as const,
      status: 'completed' as const,
      assignees: ['user1'],
      dueDate: 'Dec 3, 2024',
      progress: 100,
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Task
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage and track your team's tasks
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button
            startIcon={<Add />}
            variant="contained"
            size="small"
            sx={{ textTransform: 'none' }}
          >
            New Task
          </Button>
          <IconButton>
            <ViewKanban />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </Box>
      </Box>

      {/* Task Board */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TaskList tasks={todoTasks} title="To Do" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TaskList tasks={inProgressTasks} title="In Progress" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TaskList tasks={completedTasks} title="Completed" />
        </Grid>
      </Grid>
    </Box>
  );
};