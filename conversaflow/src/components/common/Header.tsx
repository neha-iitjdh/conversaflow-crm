import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Badge,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';

export const Header: React.FC = () => {
  const [user] = useAtom(userAtom);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 700, mr: 4 }}>
          ConversaFlow
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton>
          <SearchIcon />
        </IconButton>

        <IconButton>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Avatar
          src={user?.avatar}
          alt={user?.name}
          sx={{ ml: 2, cursor: 'pointer' }}
        />
      </Toolbar>
    </AppBar>
  );
};