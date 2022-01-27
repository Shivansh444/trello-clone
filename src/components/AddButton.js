import React from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";




const AddButton = ({ list }) => {
  const [text, settext] = useState("");
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const { addCard,addList } = bindActionCreators(actionCreators, dispatch);

  const btntxt = list ? "Add Another Card" : "Add another List";
  const btnopacity = list ? "0.5" : "1";
  const btncolor = list ? "inherit" : "white";
  const btnbg = list ? "inherit" : "rgba(0,0,0,.15)";
  const btnheight = list ? "initial" : "fit-content";
  const btnwidth = list ? "initial" : "330px";
  
 

  const styles = {
    box: {
      display: "flex",
      alignItems: "center",
    },
    boxx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "self-end",
      height: "25px",
      margin: "5px",
    },
    text: {
      width: "inherit",
    },
  };
  // if no list is found
  if(!list){
    if(open){
      return (
        <div style={styles.box,{height:'fit-content'}}>
          <div
            onBlur={() => {
              setopen(false);
            }}
            style={{
              ...styles.box,
              opacity: btnopacity,
              color: btncolor,
              backgroundColor: btnbg,
              height: btnheight,
              width: btnwidth,
            }}
          >
            <TextField
              type="text"
              multiline
              label="Enter list title"
              onChange={(e) => {
                settext(e.target.value);
              }}
              fullWidth
              variant="outlined"
            />
          </div>
          <div style={styles.boxx}>
            <Button
              variant="contained"
              onMouseDown={(e) => {
                (text!=='')?addList(text):setopen(false);
                settext('')
              }}
              style={{
                height: "-webkit-fill-available",
                padding: "0px 5px",
                marginRight: "10px",
              }}
            >
              Add List
            </Button>
            <ClearIcon
              onClick={() => {
                setopen(false);
              }}
            />
          </div>
        </div>
      );
    }
    return (
      <>
        <div
          onClick={() => (open === false ? setopen(true) : null)}
          style={{
            ...styles.box,
            opacity: btnopacity,
            color: btncolor,
            backgroundColor: btnbg,
            height: btnheight,
            width: btnwidth,
          }}
        >
          <AddIcon style={styles.icon} />
          <p style={styles.text}>{btntxt}</p>
        </div>
      </>
    ); 
  }
  // if list is there then add card will work
  if (open && list) {
    return (
      <>
        <div
          onBlur={() => {
            setopen(false);
          }}
          style={{
            ...styles.box,
            opacity: btnopacity,
            color: btncolor,
            backgroundColor: btnbg,
            height: btnheight,
            width: btnwidth,
          }}
        >
          <TextField
            type="text"
            multiline
            label="Enter card title"
            onChange={(e) => {
              settext(e.target.value);
            }}
            fullWidth
            variant="outlined"
          />
        </div>
        <div style={styles.boxx}>
          <Button
            variant="contained"
            onMouseDown={(e) => {
              text===''?setopen(false):addCard( text,list.id);
              settext('')
              {console.log(text, list.id)}
            }}
            style={{
              height: "-webkit-fill-available",
              padding: "0px 5px",
              marginRight: "10px",
            }}
          >
            Add Card
          </Button>
          <ClearIcon
            onClick={() => {
              setopen(false);
            }}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        onClick={() => (open === false ? setopen(true) : null)}
        style={{
          ...styles.box,
          opacity: btnopacity,
          color: btncolor,
          backgroundColor: btnbg,
          height: btnheight,
          width: btnwidth,
        }}
      >
        <AddIcon style={styles.icon} />
        <p style={styles.text}>{btntxt}</p>
      </div>
    </>
  );
};

export default AddButton;
