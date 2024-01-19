import * as React from "react";
import SideBar from "./Components/Sidebar/Sidebar";
import { Container, CssBaseline, Grid } from "@mui/material";
import MainFeed from "./Components/Mainfeed/Mainfeed";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "./Context/ThemeContext.tsx";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (_props) => {
  const { darkTheme } = useTheme();

  const [selectModel, setSelectModel] = React.useState<String>("");

  const [firstSelect, setFirstSelect] = React.useState<String>("");
  const [secondSelect, setSecondSelect] = React.useState<String>("");

  return (
    <>
      {/* mui themeProvider   */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Container
          maxWidth="xl"
          sx={{
            // bgcolor: "#2b2828",
            height: "max-content",
            position: "relative",
            padding: "0px 0px 30px 0px",
          }}
        >
          {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} > */}
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <SideBar
                firstSelect={firstSelect}
                setFirstSelect={setFirstSelect}
                secondSelect={secondSelect}
                setSecondSelect={setSecondSelect}
                selectModel={selectModel}
                setSelectModel={setSelectModel}
              />
            </Grid>
            <Grid item xs={9}>
              <MainFeed
                firstSelect={firstSelect}
                secondSelect={secondSelect}
                selectModel={selectModel}
              />
            </Grid>
          </Grid>
          {/* </Box> */}
        </Container>
        {/* footer  */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
