import React from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Tooltip from '@mui/material/Tooltip';


const Members = ({ name, member }) => {
  // bring in the members on the basis of member boolean and arrnge them into active members and members
  const dispatch = useDispatch();

  const { addMember, removeMember } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function initial() {
    let arr = name.split(" ");
    let o = arr[0].charAt(0);
    let oo = arr[1].charAt(0);
    return o + oo;
  }

  if (member.member===false) {
    return (
      <div style={{ marginRight: "15px" }} key={member.id}>
           <Tooltip title={name}>
        <Avatar sx={{ bgcolor: deepPurple[400] }} onClick={() => {addMember(member.id)}}>
          {initial()}
        </Avatar>
         </Tooltip>
      </div>
    );
  } else {
    return null;
  }

  //   return(<>
  //    <div style={{marginRight:'15px'}}>
  //       <Avatar sx={{ bgcolor: deepOrange[400] }}>{initial()}</Avatar>
  //   </div>
  //   <div style={{marginRight:'15px'}}>
  //       <Avatar sx={{ bgcolor: deepOrange[400] }}>{initial()}</Avatar>
  //   </div>
  //   </>
  //   )
};

export default Members;
