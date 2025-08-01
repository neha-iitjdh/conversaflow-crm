import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Settings, FileDownload } from '@mui/icons-material';
import { PerformanceMetrics } from '@/components/team/PerformanceMetrics';
import { MemberList } from '@/components/team/MemberList';
import { teamMembers } from '@/services/mockData';

export const Performance: React.FC = () => {
  const leadsData = [
    { name: 'Martin', value: 90 },
    { name: 'Azsey', value: 75 },
    { name: 'Moja', value: 85 },
    { name: 'Miya', value: 95 },
    { name: 'Friska', value: 124 },
    { name: 'Julian', value: 105 },
    { name: 'Aestin', value: 88 },
    { name: 'Phuan', value: 70 },
    { name: 'Chaki', value: 65 },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Team Performance
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Let see how your team is growing
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <IconButton>
            <FileDownload />
          </IconButton>
          <Typography variant="body2" fontWeight={600}>
            Export Data
          </Typography>
          <IconButton>
            <Settings />
          </IconButton>
        </Box>
      </Box>

      {/* Performance Metrics */}
      <PerformanceMetrics
        totalMembers={2521}
        activeMembersToday={1802}
        averageTime="6:39:32"
        change={-1.2}
        leadsData={leadsData}
      />

      {/* Member List */}
      <MemberList members={teamMembers} />
    </Box>
  );
};