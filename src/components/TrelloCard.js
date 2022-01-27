import React from "react";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";
import { BasicModal } from "./BasicModal";
import { Tooltip } from "@mui/material";

const TrelloCard = ({ card, listid, cardid, index }) => {
  const lists = useSelector(state => state.list)

  const [openmod, setopenmod] = useState(false);
  // make state for every card and then use
  const [cardId, setcardId] = useState(0);
  const dispatch = useDispatch();
  const { addCard, addList, removeCard } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // const btnopacity1 = show1?'0.6':'0';
  // const btnopacity2 = show2?'0.6':'0';
  const styles = {
    container: {
      padding: "6px 8px 2px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "space-between",
    },
    icons: {
      opacity: "0",
      transition:'0.3s'
    },
  };
  const setopen = (bool, cardid) => {
    setopenmod(bool);
  };
  const setshow = (listid, cardid, add) => {
    let element = document.getElementById(`card${listid}${cardid}`);

    if (add) {
      element.classList.add("fff");
    } else {
      element.classList.remove("fff");
    }
  };

  const setshoww = (listid, cardid, add) => {
    let element = document.getElementById(`carda${listid}${cardid}`);

    setcardId(cardid);
    if (add) {
      element.classList.add("fff");
    } else {
      element.classList.remove("fff");
    }
  };

  return (
    <>
      <Draggable draggableId={String(card.id)} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              id={card.id}
              sx={{ minWidth: 275 }}
              style={styles.container}
              key={card.id}
              // style={{display:'flex',flexDirection:'column'}}
            >
              <div style={{display:'flex',width:'100%',height:'8px'}}>
                {
                  card.label.map((lab)=>{
                          return(<>
                          <Tooltip title={lab.text?lab.text:'label'}>
                              <span key={lab.id} style={{backgroundColor:lab.color,width:'40px',borderRadius:'5px',marginRight:'5px'}}></span>
                          </Tooltip>
                            </>)
                  }
                  )
                }
              </div>
              <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                >
                {card.title}
              </Typography>
              <div>
                <DeleteIcon
                  className="del-icon"
                  id={`card${listid}${card.id}`}
                  style={styles.icons}
                  onClick={() => {
                    removeCard(listid, card.id);
                  }}
                  onMouseEnter={(e) => {
                    console.log(listid, card.id);
                    setshow(listid, card.id, true);
                  }}
                  onMouseLeave={(e) => setshow(listid, card.id, false)}
                  />
                <EditIcon
                  className="edit-icon"
                  id={`carda${listid}${card.id}`}
                  style={styles.icons}
                  onMouseEnter={() => setshoww(listid, card.id, true)}
                  onClick={() => {
                    setopen(true, card.id);
                  }}
                  onMouseLeave={() => setshoww(listid, card.id, false)}
                  />
                <BasicModal
                  openmod={openmod}
                  setopenmod={setopenmod}
                  cardId={card.id}
                  listId={listid}
                  />
                {console.log(cardId)}
              </div>
                  </div>
            </Card>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default TrelloCard;
