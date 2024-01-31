import * as React from 'react';
import { Box } from '@mui/material';
import { FixedFixed, TimeFixed,TimeTime,FixedTime, House , FixedFixedHybrid, FixedTimeHybrid, TimeFixedHybrid, TimeTimeHybrid } from '../../Views';
import Calculator from '../../Components/Calculatator/Calculator';
const NoData = React.lazy(()=> import('../../Components/NoData/NoData'));




interface IMainFeedProps {
  clientType: String; 
  vendorType: String;
   selectModel: String;
}

const MainFeed: React.FunctionComponent<IMainFeedProps> = ({clientType,vendorType,selectModel}) => {

  return (
    <>
    <Box className="main-container">
    <br/>
    {/* <FixedPriceFp/> */}
 
     {/* condition for no data select  */}
     {(selectModel== "" || clientType == "" || vendorType == "") && <NoData selectModel={selectModel}/>}
     {/* Out-Sourced   */}
     {selectModel== "Outsource" && clientType == "Fixed_Price" && vendorType == "Fixed_Price" && <FixedFixed/>}
     { selectModel== "Outsource" && clientType == "Fixed_Price" && vendorType == "Time_Material" && <FixedTime/>}
     { selectModel== "Outsource" && clientType == "Time_Material" && vendorType == "Fixed_Price" && <TimeFixed/>}
     { selectModel== "Outsource" && clientType == "Time_Material" && vendorType == "Time_Material" && <TimeTime/>}
     {/* In-house  */}
     { selectModel== "In-House" && <House/>}
     {/* Hybrid  */}
     { selectModel== "Hybrid" && clientType == "Fixed_Price" && vendorType == "Fixed_Price" && <FixedFixedHybrid/>}
     { selectModel== "Hybrid" && clientType == "Fixed_Price" && vendorType == "Time_Material" && <FixedTimeHybrid/>}
     { selectModel== "Hybrid" && clientType == "Time_Material" && vendorType == "Fixed_Price" && <TimeFixedHybrid/>}
     { selectModel== "Hybrid" && clientType == "Time_Material" && vendorType == "Time_Material" && <TimeTimeHybrid/>}

   <Calculator/>
    </Box>
    
    
    </>
  ) ;
};

export default MainFeed;
