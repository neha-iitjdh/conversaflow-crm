import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  LinearProgress,
  IconButton,
  Chip,
  Button,
} from '@mui/material';
import {
  Edit,
  Delete,
  MoreVert,
  FilterList,
  PersonAdd,
} from '@mui/icons-material';
import { TeamMember } from '@/types';

interface MemberListProps {
  members: TeamMember[];
}

export const MemberList: React.FC<MemberListProps> = ({ members }) => {
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'primary';
    if (progress >= 50) return 'secondary';
    if (progress >= 30) return 'warning';
    return 'error';
  };

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
            List Members
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              startIcon={<FilterList />}
              variant="outlined"
              size="small"
              sx={{ textTransform: 'none' }}
            >
              Filter
            </Button>
            <Button
              startIcon={<PersonAdd />}
              variant="contained"
              size="small"
              sx={{ textTransform: 'none' }}
            >
              Add User
            </Button>
          </Box>
        </Box>

        {/* Table Header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2fr 1.5fr 1.5fr 1fr',
            gap: 2,
            pb: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            mb: 2,
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Name
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Task Progress
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Email
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Title
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Last Active
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Team
          </Typography>
        </Box>

        {/* Table Body */}
        {members.map((member, index) => (
          <Box
            key={member.id}
            sx={{
              display: 'grid',
              gridTemplateColumns: '2fr 2fr 2fr 1.5fr 1.5fr 1fr',
              gap: 2,
              py: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
              alignItems: 'center',
              '&:last-child': {
                borderBottom: 'none',
              },
            }}
          >
            {/* Name with Avatar */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                {index + 1}.
              </Typography>
              <Avatar
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="body2" fontWeight={500}>
                {member.name}
              </Typography>
            </Box>

            {/* Task Progress */}
            <Box>
              <LinearProgress
                variant="determinate"
                value={member.taskProgress}
                color={getProgressColor(member.taskProgress)}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'action.hover',
                }}
              />
            </Box>

            {/* Email */}
            <Typography variant="body2" color="text.secondary">
              {member.email}
            </Typography>

            {/* Title */}
            <Typography variant="body2">{member.title}</Typography>

            {/* Last Active */}
            <Typography variant="body2" color="text.secondary">
              {member.lastActive}
            </Typography>

            {/* Team Tags & Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {member.team.slice(0, 1).map((team, idx) => (
                <Chip key={idx} label={team} size="small" />
              ))}
              {member.team.length > 1 && (
                <Chip
                  label={`+${member.team.length - 1}`}
                  size="small"
                  variant="outlined"
                />
              )}
              <IconButton size="small">
                <Delete fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <Edit fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <MoreVert fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};