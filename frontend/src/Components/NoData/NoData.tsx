import { Box, Paper } from '@mui/material';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

interface INoDataProps {
    selectModel : String;
}

const NoData: React.FunctionComponent<INoDataProps> = ({selectModel}) => {
   
  return(
    <>

    <Paper elevation={10} sx={{height:"18.5vh", padding:"50px", display :selectModel=="In-House" ? "none" : "block"  }} >
        <Box sx={{mt:{lg:-3}}}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={60} sx={{}}/>
        </Box>
    </Paper>

    <Paper elevation={10} sx={{height:"52vh", mt:3, padding:"50px",display :selectModel=="In-House" ? "none" : "block" }}>
        <Box sx={{mt:{lg:-3}}}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={60} sx={{mt:2}} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={60}sx={{mt:1}} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={90} sx={{ }} />
        </Box>
    </Paper>
    
    
    </>
  ) ;
};

export default NoData;
