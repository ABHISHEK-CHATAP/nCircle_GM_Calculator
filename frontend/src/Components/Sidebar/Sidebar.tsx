import * as React from 'react';
import "./Sidebar.css"
import { Box, MenuItem, Paper, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface ISideBarProps {
  firstSelect : String;
  setFirstSelect : React.Dispatch<React.SetStateAction<String>>;
  secondSelect: String; 
  setSecondSelect: React.Dispatch<React.SetStateAction<String>>;
  selectModel:String;
  setSelectModel:React.Dispatch<React.SetStateAction<String>>;
}

const SideBar: React.FunctionComponent<ISideBarProps> = ({firstSelect,setFirstSelect,secondSelect,setSecondSelect,selectModel,setSelectModel}) => {
  //  console.log("firstSelect",firstSelect);
  //  console.log("selectModel :",selectModel);
  const [du, setDu]=useState<String>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <>
    <Box className="importModel">
      <form >
      <label  className="button upload-btn">Import Excel File
         <input hidden type="file" id="input-file"  accept=".pdf, .doc, .docx .XLSX" 
         onChange={(e:ChangeEvent<HTMLInputElement>)=>setSelectedFile(e.target.files?.[0] || null)}/>
       </label>
       {selectedFile && (<p className='inputText'> File Name : {selectedFile.name}</p>)}
     </form>
    </Box>

    {/* ------------sidebar ----------- */}
     <Paper elevation={5}>
      <Box className="sidebarContainer">
       <Box className="sidebarItem">
       <TextField  label="sow no" fullWidth  variant="standard" />
     
       <TextField  id="standard-select-DU"
          select  label="Select DU" defaultValue={du}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setDu(e.target.value)}
          variant="standard" fullWidth >
         <MenuItem  value="DU-1">DU 1</MenuItem>
         <MenuItem  value="DU-2">DU  2</MenuItem> 
         <MenuItem  value="DU-3">DU  3</MenuItem>
         <MenuItem  value="DU-4">DU  4</MenuItem>
         <MenuItem  value="DU-5">DU  5</MenuItem>
        </TextField>

        <TextField id="Project_Name" label="Project Name" fullWidth variant="standard" />
        
        <TextField  id="Project-Model"
          select  label="Project Model" defaultValue={selectModel}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setSelectModel(e.target.value)}
           variant="standard" fullWidth >
         <MenuItem  value="Outsource">Outsource</MenuItem>
         <MenuItem  value="In-House">In-House</MenuItem> 
         <MenuItem  value="Hybrid">Hybrid</MenuItem>
        </TextField>

        <TextField  id="Project-type-client"
          select  label="Project Type ( Client )" defaultValue={firstSelect}
           onChange={(e:ChangeEvent<HTMLInputElement>)=>setFirstSelect(e.target.value)}
            variant="standard" fullWidth  disabled={selectModel=="In-House"} >
         <MenuItem  value="Fixed_Price">Fixed Price</MenuItem>
         <MenuItem  value="Time_Material">Time & Material</MenuItem> 
        </TextField>

        <TextField  id="Project-type-vendor" 
          select  label="Project Type ( vendor )" defaultValue={secondSelect} variant="standard" fullWidth 
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setSecondSelect(e.target.value)} disabled={selectModel=="In-House"}>
         <MenuItem  value="Fixed_Price">Fixed Price</MenuItem>
         <MenuItem  value="Time_Material">Time & Material</MenuItem> 
        </TextField>

        </Box>
      </Box>
      </Paper>
    </>
  );
};

export default SideBar;
