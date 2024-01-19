import * as React from 'react';
import "./FpFp.css"
import { Box, MenuItem, Paper, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface IFixedPriceFpProps {
}

const FixedPriceFp: React.FunctionComponent<IFixedPriceFpProps> = (_props) => {
  const [month, setMonth] = React.useState("")
  return (
    <>

    {/* Client details  */}
    <Paper elevation={10} sx={{padding:"20px 0px", height:"18vh"}}>
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

    {/* vendor Details  */}
    <Paper elevation={10} sx={{padding:"20px 0px", mt:2, height:"35vh",}} className='scroll'>
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

    {/* out-sourced cost additional */}
    <Paper elevation={10} sx={{padding:"20px 0px", height:{lg:110}, mt:2, }} className='scroll'>
    <Box sx={{padding:"0 50px"}} >
      <Box>
        <Typography variant='h6' sx={{fontSize:14,fontWeight:"bold"}}>Additional cost <small>( optional )</small> </Typography>
      </Box>
      <Box sx={{display:"flex",gap:10, }}>
      <TextField id="additional-cost-Name" label="Name" fullWidth variant="standard" />
      <TextField id="additional-cost-duration" label="Duration" fullWidth variant="standard" />
      <TextField id="additional-cost-cost" label="Cost" fullWidth variant="standard" />
       <span className='addbtn'><AddIcon/></span>
      </Box>

    </Box>
    </Paper>
    </>
  );
};

export default FixedPriceFp;
