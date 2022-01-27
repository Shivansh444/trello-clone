import  TrelloList  from './components/TrelloList';
import './App.css';
import {useSelector} from 'react-redux'
import AddButton from './components/AddButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useDispatch } from "react-redux";
import { Droppable } from 'react-beautiful-dnd';

function App() {
  const dispatch = useDispatch();

  const { sort } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const lists = useSelector(state => state.list)
  console.log(lists)
  const styles = {
    flex:{
      display:'flex',
      flexDirection:'row'
    }
  }
  const onDragEnd = (result)=>{
    const {destination,source,draggableId,type} = result;

    if(!destination){
      return;
    }
    
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId ,
        type
      );

    

  }

  return (
    
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
      <h1>TRELLO-CLONE</h1>
      <Droppable droppableId='all-lists' direction='horizontal' type='list'>
      {provided=> (

        <div style={styles.flex} {...provided.droppableProps} ref={provided.innerRef}>
        {lists.map((list,index)=>{
          
          return <TrelloList list={list} key={list.id} index={index}/>
        })}
      {provided.placeholder}
      <AddButton/>
      </div>
      )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
