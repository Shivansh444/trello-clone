import { useSelector } from "react-redux";
import { CONSTANTS } from "../actionCreators";

let listId = 3;
let cardId = 6;
let commentId = 2;
let labelId = 2;

const initialState = [
  {
    title: "First List",
    id: `list-${0}`,

    cards: [
      {
        id: `card-${0}`,
        title: "first task of the day",
        desc: "This is the first task of the list",
        label: [
          // {
          //   id:0,
          //   color:'#eb5a46',
          //   text:'work in progress'
          // }
        ],
        comments: [],
      },
      {
        id: `card-${1}`,
        title: "second task of the day",
        desc: "This is the second task of the list",
        label: [
          // {
          //   id:0,
          //   color:'#eb5a46',
          //   text:'work in progress'
          // },
          // {
          //   id:1,
          //   color:'purple',
          //   text:'up in 4 days'
          // }
        ],
        comments: [],
      },
    ],
  },
  {
    title: "Second List",
    id: `list-${1}`,

    cards: [
      {
        id: `card-${2}`,
        title: "first task of the night",
        desc: "This is the first task of the list",
        label: [
          // {
          //   id:0,
          //   color:'red',
          //   text:'work in progress'
          // },
          // {
          //   id:1,
          //   color:'purple',
          //   text:'up in 4 days'
          // }
        ],
        comments: [
          // { id: 0, text: "this is a comment", by: "Sumedha Chowdhury", time:'' },
        ],
      },
      {
        id: `card-${3}`,
        title: "second task of the night",
        desc: "This is the second task of the list",
        label: [
          // {
          //   id:0,
          //   color:'red',
          //   text:'work in progress'
          // },
          // {
          //   id:1,
          //   color:'purple',
          //   text:'up in 4 days'
          // }
        ],
        comments: [],
      },
    ],
  },
  {
    title: "Third List",
    id: `list-${2}`,

    cards: [
      {
        id: `card-${4}`,
        title: "first task of the night",
        desc: "This is the first task of the list",
        label: [
          // {
          //   id:0,
          //   color:'red',
          //   text:'work in progress'
          // },
          // {
          //   id:1,
          //   color:'purple',
          //   text:'up in 4 days'
          // }
        ],
        comments: [],
      },
      {
        id: `card-${5}`,
        title: "second task of the night",
        desc: "Catch this one",
        label: [],
        comments: [],
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`,
      };
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      console.log(action.payload.title, action.payload.listId);
      const newCard = {
        id: `card-${cardId}`,
        title: action.payload.title,
        desc: "",
        label: [],
        comments:[]
      };
      cardId += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      console.log(newState);
      return newState;

    case CONSTANTS.REMOVE_CARD:
      console.log(action.payload.cardId, action.payload.listId);
      const nuState = state.map((list) => {
        if (action.payload.listId === list.id) {
          console.log(list.cards);
          const newCard = list.cards.filter((card) => {
            return card.id != action.payload.cardId;
          });
          list.cards = newCard;
          console.log(list.cards);
          return list;
        } else {
          return list;
        }
      });
      console.log(nuState);
      return nuState;

    case CONSTANTS.REMOVE_LIST:
      const newstate = state.filter((list) => {
        return list.id != action.payload;
      });
      return newstate;

    case CONSTANTS.SETDESC_CARD:
      const ns = state.map((list) => {
        if (action.payload.listId === list.id) {
          const nc = list.cards.map((card) => {
            if (card.id === action.payload.cardId) {
              const nucard = {
                id: `card-${card.id}`,
                title: card.title,
                desc: action.payload.desc,
                label: card.label,
              };
              console.log(nucard);
              return nucard;
            } else {
              return card;
            }
          });
          const nlist = {
            title: list.title,
            id: `list-${list.id}`,
            cards: nc,
          };
          return nlist;
        } else {
          return list;
        }
      });
      console.log(ns);
      return ns;

    case CONSTANTS.SETTITLE_CARD:
      const nss = state.map((list) => {
        if (action.payload.listId === list.id) {
          const nc = list.cards.map((card) => {
            if (card.id === action.payload.cardId) {
              const nucard = {
                id: `card-${card.id}`,
                title: action.payload.title,
                desc: card.desc,
                label: card.label,
              };
              console.log(nucard);
              return nucard;
            } else {
              return card;
            }
          });
          const nlist = {
            title: list.title,
            id: `list-${list.id}`,
            cards: nc,
          };
          return nlist;
        } else {
          return list;
        }
      });
      console.log(nss);
      return nss;

    case CONSTANTS.ADD_COMMENT:
      const ncomm = {
        id: commentId,
        text: action.payload.comment,
        by: action.payload.by,
        time: action.payload.time,
      };
      const nstate = state.map((list) => {
        if (action.payload.listId === list.id) {
          const ncards = list.cards.map((card) => {
            if (action.payload.cardId === card.id) {
              return {
                ...card,
                comments: [...card.comments, ncomm],
              };
            } else {
              return card;
            }
          });

          console.log(ncards);
          return {
            ...list,
            cards: ncards,
          };
        } else {
          return list;
        }
      });
      commentId++;
      console.log(nstate);
      return nstate;

    case CONSTANTS.REMOVE_COMMENT:
      const nst = state.map((list) => {
        if (list.id === action.payload.listId) {
           const ocards = list.cards.map((card) => {
            if (card.id === action.payload.cardId) {
              const ncom = card.comments.filter((comm) => {
                return comm.text !== action.payload.comment;
              });
              return{
                ...card,
                comments:ncom
              }
            } else {
              return card;
            }
          });
          return {
            ...list,
            cards:ocards
          }
        } else {
          return list;
        }
      });
      console.log(action.payload.comment,action.payload.listId)
      console.log(nst)
      return nst;

    case CONSTANTS.ADD_LABEL:
      const nlab = {
        id: labelId,
        color: action.payload.color,
        text: action.payload.text,

      };
      console.log(nlab);
      const nostate = state.map((list) => {
        if (action.payload.listId === list.id) {
          const nocards = list.cards.map((card) => {
            if (action.payload.cardId === card.id) {
              console.log(action.payload.cardId);
              let isFound = false;
              card.label.map((lab) => {
                if (lab.color === action.payload.color) {
                  isFound = true;
                }
              });
              if (isFound) {
                return card;
              }
              return {
                ...card,
                label: [...card.label, nlab],
              };
            } else {
              return card;
            }
          });
          console.log(list);

          console.log(nocards);
          return {
            ...list,
            cards: nocards,
          };
        } else {
          return list;
        }
      });
      labelId++;
      console.log(nostate);
      return nostate;

    case CONSTANTS.REMOVE_LABEL:
      const fstate = state.map((list) => {
        if (action.payload.listId === list.id) {
          const nocards = list.cards.map((card) => {
            if (action.payload.cardId === card.id) {
              console.log(action.payload.cardId);
              const labs = card.label.filter((lab) => {
                return lab.color != action.payload.color;
              });
              return {
                ...card,
                label: labs,
              };
            } else {
              return card;
            }
          });
          

          console.log(nocards);
          return {
            ...list,
            cards: nocards,
          };
        } else {
          return list;
        }
      });

      console.log(fstate);
      return fstate;

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const neState = [...state];
      // dragging lists around
      if (type === "list") {
        const list = neState.splice(droppableIndexStart, 1);
        neState.splice(droppableIndexEnd, 0, ...list);
        return neState;
      }
      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      // in other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drrag happened
        const listStart = state.find((list) => droppableIdStart === list.id);

        //pull out the card from the list
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // find the list where drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return neState;

    default:
      return state;
  }
};

export default listReducer;
