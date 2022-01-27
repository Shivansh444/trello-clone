import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from '@mui/icons-material/Close';
import '../App.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DoneIcon from '@mui/icons-material/Done';
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useDispatch } from "react-redux";
import { TextField } from '@mui/material';
import { useState,useEffect } from 'react';
import { SettingsInputComponent } from '@mui/icons-material';

export default function BasicSelect({cardId,listId}) {
  const [age, setAge] = useState('');
  const [text, settext] = useState('');
  const [open, setOpen] = useState(false)
  const [red, setred] = useState(true);
  const [blue, setblue] = useState(true);
  const [green, setgreen] = useState(true);
  const [yellow, setyellow] = useState(true);
  const [sky, setsky] = useState(true);
  const [purple, setpurple] = useState(true);
  const [orange, setorange] = useState(true);
  const dispatch = useDispatch();
  const { addLabel,removeLabel } = bindActionCreators(
    actionCreators,
    dispatch
  );
  
  

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  
const markDone =(e,val)=>{

  console.log(val)
  
  if(val===true){
    
    console.log(cardId,listId)
    addLabel(cardId,listId,e.target.style.backgroundColor,text)
    
  
    
  }else{
    removeLabel(cardId,listId,e.target.style.backgroundColor)
  
  }
  console.log(red)
  
}

  return (<>
    <Box sx={{ minWidth: 120 }}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end',marginTop:'5px'}}>
<TextField id="standard-basic" label="" value={text} placeholder='' onChange={(e)=>{settext(e.target.value)}} placeholder='Add a Tag' variant="standard"  style={{width:'100%'}}/>
      <FormControl  >
        <Select
          style={{width:'30px', height:'40px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          onChange={handleChange}
          >
          
<InputLabel id="demo-simple-select-label" style={{textAlign:'center'}}>Pick a Color</InputLabel>
          <MenuItem className='menu-item' style={{backgroundColor:'#eb5a46',height:'35px'}}  onClick={(e)=>{setred(!red);red?addLabel(cardId,listId,e.target.style.backgroundColor,text):removeLabel(cardId,listId,e.target.style.backgroundColor)}}  value={10}>
           </MenuItem>
          <MenuItem className='menu-item' style={{backgroundColor:'#0079bf',height:'35px'}} onClick={(e)=>{setblue(!blue);blue?addLabel(cardId,listId,e.target.style.backgroundColor,text):removeLabel(cardId,listId,e.target.style.backgroundColor)}} value={20}></MenuItem>
          <MenuItem className='menu-item' style={{backgroundColor:'#61bd4f',height:'35px'}} onClick={(e)=>{setgreen(!green);green?addLabel(cardId,listId,e.target.style.backgroundColor,text):removeLabel(cardId,listId,e.target.style.backgroundColor)}} value={30}></MenuItem>
          <MenuItem className='menu-item' style={{backgroundColor:'#f2d600',height:'35px'}} onClick={(e)=>{setyellow(!yellow);yellow?addLabel(cardId,listId,e.target.style.backgroundColor,text):removeLabel(cardId,listId,e.target.style.backgroundColor)}} value={40}></MenuItem>
          <MenuItem className='menu-item' style={{backgroundColor:'#00c2e0',height:'35px'}} onClick={(e)=>{setsky(!sky);sky?addLabel(cardId,listId,e.target.style.backgroundColor,text):removeLabel(cardId,listId,e.target.style.backgroundColor)}} value={50}></MenuItem>
          <MenuItem className='menu-item' style={{backgroundColor:'#c377e0',height:'35px'}} onClick={(e)=>{setpurple(!purple);purple?addLabel(cardId,listId,e.target.style.backgroundColor,text):removeLabel(cardId,listId,e.target.style.backgroundColor)}}></MenuItem>
          <MenuItem className='menu-item' style={{backgroundColor:'#ff9f1a',height:'35px'}} onClick={(e)=>{setorange(!orange);orange?addLabel(cardId,listId,e.target.style.backgroundColor,text):removeLabel(cardId,listId,e.target.style.backgroundColor)}}></MenuItem>
          
        </Select>
      </FormControl>
            </div>
    </Box>
          </>
  );
}