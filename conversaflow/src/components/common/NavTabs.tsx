import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { label: 'Overview', value: '/' },
  { label: 'Performance', value: '/performance' },
  { label: 'Activity', value: '/activity' },
  { label: 'Product', value: '/product' },
  { label: 'Task', value: '/task' },
];

export const NavTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
      <Tabs
        value={location.pathname}
        onChange={handleChange}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
    </Box>
  );
};