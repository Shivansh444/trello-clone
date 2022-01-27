import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Comments from "./Comments";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../state/index";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

// makke a comment box
const Activity = ({ cardId, listId, members }) => {
  const [value, setvalue] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true)
  

  const [by, setby] = useState("");
  const [time, settime] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.list);
  const { addComment, removeComment } = bindActionCreators(
    actionCreators,
    dispatch
  );
  let comms = [];
  function initial(name) {
    let arr = name.split(" ");
    let o = arr[0].charAt(0);
    let oo = arr[1].charAt(0);
    return o + oo;
  }

  const selectComm = (e, member) => {
    let comms = document.getElementsByClassName("actmem");
    console.log(comms[1]);
    for (let i = 0; i < comms.length; i++) {
      comms[i].style.opacity = "0.2";
    }

    e.target.style.opacity = "1";
  };
  const validate=()=>{
      if(by==='' || value===''){
          setBtnDisabled(true)
      }else{
        setBtnDisabled(false)
         
      }
  }
  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Comment Section
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ width: "25%", display: "flex" }}>
          {members.map((member) => {
            // return <ActiveMembers name={member.name} member={member} key={member.id} commentor={true} />
            if (member.member) {
              return (
                <div style={{ marginRight: "15px" }} key={member.id}>
                  <Tooltip title={member.name}>
                    <Avatar
                      className="actmem"
                      sx={{ bgcolor: deepOrange[400] }}
                      onClick={(e) => {
                        selectComm(e);

                        setby(member.name);
                      }}
                    >
                      {initial(member.name)}
                    </Avatar>
                  </Tooltip>
                </div>
              );
            }
          })}
        </div>
        <TextField
          id="standard-basic"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
            validate();
          }}
       

          label="Add a comment"
          variant="standard"
          style={{ width: "60%" }}
        />
        <Button
        disabled={btnDisabled}
          variant="contained"
          onClick={() => {
            const tt = new Date().toLocaleString();
            addComment(cardId, listId, value, by, tt);
            
          }}
        
        >
          Post
        </Button>
      </div>
      <div>
        {lists.map((list) => {
          if (listId === list.id) {
            list.cards.map((card) => {
              if (card.id === cardId) {
                if (card.comments) {
                  comms = card.comments;
                }
              }
            });
          }
        })}
        {comms.map((comment) => {
          return (
            <Comments
              key={comment.id}
              by={comment.by}
              comment={comment.text}
              time={comment.time}
              listId={listId}
              cardId={cardId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activity;
