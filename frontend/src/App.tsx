import * as React from "react";
import SideBar from "./Components/Sidebar/Sidebar";
import {  Container, CssBaseline, Grid } from '@mui/material';
import MainFeed from "./Components/Mainfeed/Mainfeed";
import Navbar from "./Components/Navbar/Navbar";


interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (_props) => {
 
  const [selectModel, setSelectModel] = React.useState<String>("");
   
  const [firstSelect,  setFirstSelect] = React.useState<String>("");
  const [secondSelect, setSecondSelect] = React.useState<String>("");


  return (<>
  
    <CssBaseline />
    <Navbar/>
      <Container maxWidth="xl">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} > */}
        <Grid container spacing={2}>
        <Grid item xs={3}>
        <SideBar firstSelect={firstSelect} setFirstSelect={setFirstSelect}
         secondSelect={secondSelect} setSecondSelect={setSecondSelect}
         selectModel={selectModel} setSelectModel={setSelectModel}
         />
        </Grid>
        <Grid item xs={9}>
        <MainFeed firstSelect={firstSelect} secondSelect={secondSelect} selectModel={selectModel} />
        </Grid>
        </Grid>
        {/* </Box> */}
      </Container>
  
  
  
  
  </>);
};

export default App;
