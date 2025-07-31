import React from 'react';
import { Box, Button } from '@mui/material';

const tabs = ['Summary', 'Insight', 'Service', 'Analytic', 'Target'];

interface SubNavTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const SubNavTabs: React.FC<SubNavTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={activeTab === tab ? 'contained' : 'text'}
          onClick={() => onTabChange(tab)}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 2,
            px: 3,
            color: activeTab === tab ? 'white' : 'text.secondary',
            backgroundColor:
              activeTab === tab ? 'primary.main' : 'transparent',
            '&:hover': {
              backgroundColor:
                activeTab === tab ? 'primary.dark' : 'action.hover',
            },
          }}
        >
          {tab}
        </Button>
      ))}
    </Box>
  );
};