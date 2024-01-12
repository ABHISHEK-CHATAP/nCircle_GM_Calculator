import * as React from 'react';
import "./Navbar.css"
import { AppBar, Toolbar, Typography ,Container} from '@mui/material';
import logo from "../../Images/nCicle_logo-removebg-preview.png"

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (_props) => {
  

  return (
    <>
      <AppBar position="static" id='AppBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src={logo} width={200} height={50} style={{color:"#fff"}}/>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    
    </>
  );
};

export default Navbar;
