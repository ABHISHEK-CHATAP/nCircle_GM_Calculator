import { Box, Paper } from '@mui/material';
import * as React from 'react';

interface INoDataProps {
}

const NoData: React.FunctionComponent<INoDataProps> = (_props) => {
  return(
    <>

    <Paper elevation={5} sx={{height:"18.5vh", padding:"50px"}}>
        <Box>
            <h1>Loading...</h1>
        </Box>
    </Paper>

    <Paper elevation={5} sx={{height:"50vh", mt:2, padding:"50px"}}>
        <Box>
            <h1>Loading...</h1>
        </Box>
    </Paper>
    
    
    </>
  ) ;
};

export default NoData;
