import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import "./Footer.css";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (_props) => {
  return (
    <>
      <AppBar
        position="static"
        id="footer"
        sx={{ position: "relative", bottom: 0 }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 900,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Footer
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
