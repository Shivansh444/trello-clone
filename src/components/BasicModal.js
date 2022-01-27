import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import '../App.css';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useDispatch } from "react-redux";
import Members from './Members'
import { Button, Divider, TextField } from "@mui/material";
import ActiveMembers from "./ActiveMembers";
import Activity from './Activity'
import Tooltip from '@mui/material/Tooltip';
import Labels from './Labels'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function BasicModal({ openmod, setopenmod, cardId, listId }) {
  const lists = useSelector((state) => state.list);
  const members = useSelector((state)=> state.member)
  const dispatch = useDispatch();
  console.log(cardId, listId);
  const { addCard, addList, removeCard, removeList, setDesc, settitle, addMember } =
    bindActionCreators(actionCreators, dispatch);

  let initial = "";

  // lists.map((list)=>{
  //   if(list.id===listid){
  //     const ecard = list.cards.filter((card)=>{
  //       return cardid===card.id
  //     })
  //     initial = ecard.desc
  //   }
  // })
  // get the best way to access without using array id
  let prev ;
  let pret;
  function getdata(listId,cardId,i){
  lists.map((list)=>{
    if(list.id===listId){
      list.cards.map((card)=>{
        if(card.id===cardId){
          console.log(card.title)
          console.log(card.desc)
          if(i==='desc')  {
            console.log(card.desc,'fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
            prev = card.desc;
            return card.desc
          }
          else {pret = card.title;
            return card.title;}
        }
      })
    }
  })
}
 getdata(listId,cardId,'desc');
 getdata(listId,cardId,'title');
  const [val, setval] = useState('');
  const [Title, setTitle] = useState('');
  
  console.log(val,Title)

  function changedesc(listid, cardid, val) {
    setDesc(listid, cardid, val);
    console.log("work")
  }
  function changetitle(listid, cardid, title) {
    settitle(listid, cardid, title);
    console.log("work");
    
  }
  function setvaluet(listid, cardid) {
    console.log(Title)
    if (Title === "") {
      return pret;
    }
    lists.map((list)=>{
      if(list.id===listId){
        list.cards.map((card)=>{
          if(card.id===cardId){
            console.log(card.title)
            console.log(card.desc)
            
              return card.title
           
            
          }
        })
      }
    })
    
    
  }

  function setvalue(listid, cardid) {
    if (val === '') {
      return prev;
    }
    lists.map((list)=>{
      if(list.id===listId){
        list.cards.map((card)=>{
          if(card.id===cardId){
            console.log(card.title)
            console.log(card.desc)
            
              return card.desc
           
            
          }
        })
      }
    })
  }
  return (
    <div style={{maxHeight:'90vh',overflowY:'scroll'}}>
      <Modal
      
        key={cardId}
        open={openmod}
        onClose={() => {
          setopenmod(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Add a Member
              </Typography>
              <div style={{display:'flex',justifyContent:'center',margin:'5px 0 15px 0'}}>
              {
                members.map((member)=>{
                  return <Members key={member.id} name={member.name} member={member}/>
                  
                })
              }
              </div>
              </div>
              <div>
                
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Active Members
              </Typography>
              <div style={{display:'flex',justifyContent:'center',margin:'5px 0 15px 0'}}>
              {
                members.map((member)=>{
                  return <ActiveMembers key={member.id} name={member.name} member={member} />
                  
                })
              }
              </div>
              </div>
            <div style={{textAlign:'center',width:'min-content',}}>
              <Typography id="modal-modal-title" variant="h5" component="h2" >
                Labels
                <Labels cardId={cardId} listId={listId}/>
              </Typography>
            </div>
          </div>
              <Divider variant='middle' style={{margin:'10px 0',width:'100%'}}  />
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Title:
          </Typography>
          <TextField
            id={`title${listId}${cardId}`}
            
            multiline
            value={setvaluet(listId,cardId)}
            onChange={(e) => {setTitle(e.target.value)}}
            fullWidth
            style={{margin:'10px 0',BackgroundColor:"#f1f1f1"}}
            
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              changetitle(listId, cardId, Title)
            }}
          >ADD</Button>
          <Typography id="modal-modal-title" variant="h5" component="h2" style={{marginTop:'10px'}}>
            Description:
          </Typography>

          <TextField
            id={`text${listId}${cardId}`}
            
            multiline
            style={{margin:'10px 0',BackgroundColor:"#f1f1f1"}}

            value={setvalue(listId, cardId)}
            onChange={(e) => {
              setval(e.target.value);
            }}
            fullWidth
          />
          {console.log(lists)}
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              changedesc(listId, cardId, val);
            }}
          >
            Add
          </Button>
          <Divider variant='middle' style={{margin:'20px 0 10px 0',width:'100%'}}  />

          <Typography id="modal-modal-title" variant="h5" component="h2" style={{marginTop:'15px'}}>
            Activity:
          </Typography>
          <Activity cardId={cardId} listId={listId} members={members} />
        </Box>
      </Modal>
    </div>
  );
}
