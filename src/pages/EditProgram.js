import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import EditBox from "./EditBox";
const itemsFromBackend = [
    {
      id: uuid(),
      name: 'Monday',
      thumb: '/images/dumbell.png'
    },
    {
        id: uuid(),
        name: 'Tuesday',
        thumb: '/images/dumbell.png'
    }
]

const columnsFromBackend = {
  [uuid()]: {
    name: "Program Days",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "Days List",
    items: []
  },

};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function EditProgram() {
  const [columns, setColumns] = useState(columnsFromBackend);
  
  return (
    <div class = "container">
    <header className="App-header">
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
            // return(
            //     <div
 
            //     key={columnId}
            //   >
            //     <EditProgram columnId = {columnId} column = {column} index = {index} />
            //     </div>
            // )
            return(
                <EditBox columnId = {columnId} column = {column} index = {index} />
            )
  
            // editBox(columnId, column, index)
          
        })}
      </DragDropContext>
      </header>
    </div>
  );
}

export default EditProgram;
