import * as React from 'react';
import "./FpFp.css"
import { Box, MenuItem, Paper, TextField, Typography } from '@mui/material';

interface IFixedPriceFpProps {
}

const FixedPriceFp: React.FunctionComponent<IFixedPriceFpProps> = (_props) => {
  const [month, setMonth] = React.useState("")
  return (
    <>
    <Paper elevation={5} sx={{padding:"30px 0px"}}>
    <Box sx={{padding:"0 50px"}} >
      <Box>
        <Typography variant='h6' sx={{fontSize:14,fontWeight:"bold"}}>Client Details </Typography>
      </Box>
      <Box sx={{display:"flex",gap:10, }}>
      <TextField id="Client-Name" label="Client Name" fullWidth variant="standard" />
      <TextField id="Total-cost" label="Total cost" fullWidth variant="standard" />
      <TextField  id="month"
          select  label="Duration (in months)" defaultValue={month}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMonth(e.target.value)}
          variant="standard" fullWidth >
         <MenuItem  value="two"> 2</MenuItem> 
         <MenuItem  value="three"> 3</MenuItem>
         <MenuItem  value="four"> 4</MenuItem>
         <MenuItem  value="five"> 5</MenuItem>
        </TextField>
      </Box>
    </Box>
    </Paper>

    <Paper elevation={10} sx={{padding:"30px 0px", mt:3}}>
    <Box sx={{padding:"0 50px"}} >
      <Box>
        <Typography variant='h6' sx={{fontSize:14,fontWeight:"bold"}}>Vendor Details </Typography>
      </Box>
      <Box sx={{display:"flex",gap:10, }}>
      <TextField id="Client-Name" label="Client Name" fullWidth variant="standard" />
      <TextField id="Total-cost" label="Total cost" fullWidth variant="standard" />
      <TextField  id="month"
          select  label="Duration (in months)" defaultValue={month}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMonth(e.target.value)}
          variant="standard" fullWidth >
         <MenuItem  value="DU-2"> 2</MenuItem> 
         <MenuItem  value="DU-3"> 3</MenuItem>
         <MenuItem  value="DU-4"> 4</MenuItem>
         <MenuItem  value="DU-5"> 5</MenuItem>
        </TextField>
      </Box>

      {/* project lead / */}
      <Box sx={{marginTop:4}}>
      <Box>
        <Typography variant='h6' sx={{fontSize:14,fontWeight:"bold"}}>Project Lead <small>( optional )</small> </Typography>
      </Box>
      <Box sx={{display:"flex",gap:10, }}>
      <TextField id="project-lead-Name" label=" Name" fullWidth variant="standard" />
      <TextField id="Total-hours" label="Total hours" fullWidth variant="standard" />
      <TextField id="charge-per-day" label="charge / day" fullWidth variant="standard" />
      </Box>
      </Box>

      {/* team lead  */}
      <Box sx={{marginTop:3}}>
      <Box>
        <Typography variant='h6' sx={{fontSize:14,fontWeight:"bold"}}>Team Lead <small>( optional )</small> </Typography>
      </Box>
      <Box sx={{display:"flex",gap:10, }}>
      <TextField id="Team-lead-Name" label=" Name" fullWidth variant="standard" />
      <TextField id="Total-hours" label="Total hours" fullWidth variant="standard" />
      <TextField id="charge-per-day" label="charge / day" fullWidth variant="standard" />
      </Box>
      </Box>

    </Box>
    </Paper>
    </>
  );
};

export default FixedPriceFp;
