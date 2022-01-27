import React from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import Divider from '@mui/material/Divider';


const Comments = ({ by, comment, time,listId, cardId }) => {
  const dispatch = useDispatch();
  const {removeComment } = bindActionCreators(
    actionCreators,
    dispatch
  );

 
  function initial() {
    let arr = by.split(" ");
    let o = arr[0].charAt(0);
    let oo = arr[1].charAt(0);
    return o + oo;
  }


  return (
    <div style={{ display: "flex",marginTop:'10px',justifyContent:'space-around'}}>
        <div style={{width:'25%',display:'flex',justifyContent:'flex-end'}}>
      <Tooltip title={by}>
        <Avatar sx={{ bgcolor: deepOrange[400] }}>{initial()}</Avatar>
      </Tooltip>
        </div>
      <div style={{width:'73%'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>

      <p style={{margin:'0'}}>{by} </p>
      <p style={{margin:'0',fontSize:'13px'}}>{time} </p>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
      <p style={{margin:'0'}}>{comment}</p>
    <DeleteIcon onClick={()=>{removeComment(cardId,listId,comment)}} style={{opacity:'0.6'}}/>
        </div>
      
      <Divider style={{marginTop:'5px'}} />
      </div>
      
    </div>
  );
};

export default Comments;
