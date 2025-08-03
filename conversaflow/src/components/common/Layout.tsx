// import React from "react";
// import { Box, Container } from "@mui/material";
// import { Header } from "./Header";
// import { NavTabs } from "./NavTabs";

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       <Header />
//       <Box sx={{ mt: 8, flexGrow: 1 }}>
//         <Container maxWidth="xl" sx={{ py: 3 }}>
//           <NavTabs />
//           {children}
//         </Container>
//       </Box>
//     </Box>
//   );
// };
import React from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { Header } from './Header';
import { NavTabs } from './NavTabs';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ mt: 8, flexGrow: 1 }}>
        <Container 
          maxWidth="xl" 
          sx={{ 
            py: 3,
            px: isMobile ? 2 : 3,
          }}
        >
          <NavTabs />
          {children}
        </Container>
      </Box>
    </Box>
  );
};