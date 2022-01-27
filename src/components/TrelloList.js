import TrelloCard from "./TrelloCard";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "./AddButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TrelloList = ({ list, index }) => {
  const [show, setshow] = useState(false);
  const iconopacity = show ? "0.6" : "0";
  const dispatch = useDispatch();
  const { addCard, addList, removeCard, removeList } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const styles = {
    listcont: {
      backgroundColor: "#ebecf0",
      border: "1px solid grey",
      borderRadius: "3px",
      width: "330px",
      margin: "0 10px",
      padding: "10px",
    },
  };

  return (
    <>
      <Draggable draggableId={String(list.id)} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div key={list.id}>
              <div key={list.id}>
                <div style={styles.listcont}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h4 style={{ margin: "5px 0 15px 0" }}>{list.title}</h4>
                    <HighlightOffIcon
                      onMouseEnter={() => {
                        setshow(true);
                      }}
                      onClick={() => {
                        removeList(list.id);
                      }}
                      style={{ opacity: iconopacity, transition: "0.3s" }}
                      onMouseLeave={() => {
                        setshow(false);
                      }}
                    />
                  </div>
                  {/* the mistake in DnD isherre */}
                  <div>
                    <Droppable droppableId={String(list.id)}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {console.log(list.cards)}
                          {list.cards.map((card, index) => {
                            return (
                              <TrelloCard
                                card={card}
                                listid={list.id}
                                cardid={card.id}
                                index={index}
                                key={card.id}
                              />
                            );
                          })}

                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                  <AddButton list={list} />
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default TrelloList;
