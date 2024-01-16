import { Box, Paper } from '@mui/material';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

interface INoDataProps {
}

const NoData: React.FunctionComponent<INoDataProps> = (_props) => {
  return(
    <>

    <Paper elevation={5} sx={{height:"18.5vh", padding:"50px"}}>
        <Box>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={60} sx={{mt:2}}/>
        </Box>
    </Paper>

    <Paper elevation={5} sx={{height:"50vh", mt:2, padding:"50px"}}>
        <Box>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={60} sx={{mt:2}} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={60}sx={{mt:1}} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="30%" />
        <Skeleton variant="rounded" width="100%" height={130} sx={{mt:2}} />
        </Box>
    </Paper>
    
    
    </>
  ) ;
};

export default NoData;
