import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';


const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={()=> navigate('/')}
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: 'flex' },cursor:'pointer' }}
          >
            The Converter
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
          
            <MenuItem key={1}>
               <Link style={{textDecoration: 'none',color:'white',cursor:'pointer'}} to="/exchange-rates">Exchange Rates</Link> 
             </MenuItem>
        
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;