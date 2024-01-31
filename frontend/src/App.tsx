import * as React from "react";
import SideBar from "./Layouts/Sidebar/Sidebar.tsx";
import { Container, CssBaseline, Grid } from "@mui/material";
import MainFeed from "./Layouts/Mainfeed/Mainfeed.tsx";
import Navbar from "./Layouts/Navbar/Navbar.tsx";
import Footer from "./Layouts/Footer/Footer.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "./Context/Context.tsx";

interface IAppProps {}

export const App: React.FunctionComponent<IAppProps> = (_props) => {
  const { darkTheme } = useTheme();

  const [selectModel, setSelectModel] = React.useState<String>("");
  const [clientType, setClientType] = React.useState<String>("");
  const [vendorType, setVendorType] = React.useState<String>("");

  return (
    <>
      {/* mui themeProvider   */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* navbar  */}
        <Navbar />
        {/* body  */}
        <Container  maxWidth="xl" sx={{ height:"100%", padding:"1rem 0rem"}} >
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <SideBar
                clientType={clientType}
                setClientType={setClientType}
                vendorType={vendorType}
                setVendorType={setVendorType}
                selectModel={selectModel}
                setSelectModel={setSelectModel}
              />
            </Grid>
            <Grid item xs={9}>
              <MainFeed
                clientType={clientType}
                vendorType={vendorType}
                selectModel={selectModel}
              />
            </Grid>
          </Grid>
        </Container>
        {/* footer  */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

