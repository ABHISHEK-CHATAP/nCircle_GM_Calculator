import * as React from 'react';
import "./Mainfeed.css"
import { Box } from '@mui/material';
import { FixedPriceFp, TimeFixed,TimeMTimeM,FixedTime, House , FixedPriceFpHybrid, FixedTimeHybrid, TimeFixedHybrid, TimeTimeHybrid } from '../../Assets';




interface IMainFeedProps {
  firstSelect: String; 
  secondSelect: String;
   selectModel: String;
}

const MainFeed: React.FunctionComponent<IMainFeedProps> = ({firstSelect,secondSelect,selectModel}) => {



  return (
    <>
    <Box className="BodyDiv">
    <h1>Body</h1>
    <br/>

     {/* Out-Sourced   */}
     {selectModel== "Outsource" && firstSelect == "Fixed_Price" && secondSelect == "Fixed_Price" && <FixedPriceFp/>}
     { selectModel== "Outsource" && firstSelect == "Fixed_Price" && secondSelect == "Time_Material" && <FixedTime/>}
     { selectModel== "Outsource" && firstSelect == "Time_Material" && secondSelect == "Fixed_Price" && <TimeFixed/>}
     { selectModel== "Outsource" && firstSelect == "Time_Material" && secondSelect == "Time_Material" && <TimeMTimeM/>}
     {/* In-house  */}
     { selectModel== "In-House" && <House/>}
     {/* Hybrid  */}
     { selectModel== "Hybrid" && firstSelect == "Fixed_Price" && secondSelect == "Fixed_Price" && <FixedPriceFpHybrid/>}
     { selectModel== "Hybrid" && firstSelect == "Fixed_Price" && secondSelect == "Time_Material" && <FixedTimeHybrid/>}
     { selectModel== "Hybrid" && firstSelect == "Time_Material" && secondSelect == "Fixed_Price" && <TimeFixedHybrid/>}
     { selectModel== "Hybrid" && firstSelect == "Time_Material" && secondSelect == "Time_Material" && <TimeTimeHybrid/>}


    </Box>
    
    
    </>
  ) ;
};

export default MainFeed;
