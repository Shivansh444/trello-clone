import React from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Tooltip from '@mui/material/Tooltip';


const ActiveMembers = ({ name, member }) => {
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


   if (member.member === true) {
    return (
      <div style={{ marginRight: "15px" }} key={member.id}>
  <Tooltip title={member.name}>

        <Avatar
          sx={{ bgcolor: deepOrange[400] }}
          onClick={() => {
            removeMember(member.id);
          }}
        >
          {initial()}
        </Avatar>
        </Tooltip>

      </div>
    );
  } else {
    return null;
  }
};

export default ActiveMembers;
