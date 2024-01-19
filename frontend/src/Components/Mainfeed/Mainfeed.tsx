import * as React from 'react';
import "./Mainfeed.css"
import { Box } from '@mui/material';
import { FixedPriceFp, TimeFixed,TimeMTimeM,FixedTime, House , FixedPriceFpHybrid, FixedTimeHybrid, TimeFixedHybrid, TimeTimeHybrid } from '../../Assets';
import Calculator from '../Calculatator/Calculator';
const NoData = React.lazy(()=> import('../NoData/NoData'));




interface IMainFeedProps {
  firstSelect: String; 
  secondSelect: String;
   selectModel: String;
}

const MainFeed: React.FunctionComponent<IMainFeedProps> = ({firstSelect,secondSelect,selectModel}) => {



  return (
    <>
    <Box className="BodyDiv">
    <br/>
    {/* <FixedPriceFp/> */}
 
     {/* condition for no data select  */}
     {(selectModel== "" || firstSelect == "" || secondSelect == "") && <NoData selectModel={selectModel}/>}
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

   <Calculator/>
    </Box>
    
    
    </>
  ) ;
};

export default MainFeed;
