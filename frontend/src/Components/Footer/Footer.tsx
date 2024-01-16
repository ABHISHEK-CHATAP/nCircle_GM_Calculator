import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import "./Footer.css"

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (_props) => {
  return(
    <>
    <AppBar position="static" id='footer'>
      <Container maxWidth="sm">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexDirection:"row",
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 900,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Footer
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    
    
    </>
  ) ;
};

export default Footer;
