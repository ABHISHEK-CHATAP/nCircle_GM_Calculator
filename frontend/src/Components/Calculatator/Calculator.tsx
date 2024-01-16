import { Box, Button, Paper, TextField } from '@mui/material';
import * as React from 'react';

interface ICalculatorProps {
}

const Calculator: React.FunctionComponent<ICalculatorProps> = (_props) => {
  return (
    <>
    
    <Paper sx={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:2,  mt:3, }} elevation={10}>
        <Box sx={{display:"flex",gap:3, alignItems:"center"}}>
            <Button variant='contained'>Gross Margin %</Button>
            <span> = </span>
            <TextField  variant="outlined" size='small' sx={{width:200}}/>
        </Box>
        <Box>
            <Button variant='contained'>clear</Button>
        </Box>
        
    </Paper>
    
    </>
  );
};

export default Calculator;
