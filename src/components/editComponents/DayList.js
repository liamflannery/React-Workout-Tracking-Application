import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { v4 as uuid } from 'uuid';
const DayList = (props) =>{
   
  

    function handleOnDragEnd(result) {
        if (!result.destination) return;

            const items = Array.from(props.programDays);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            props.setProgramDays(items);
    }
        
        return (
       
        
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="days">
              {(provided) => (
                <ul className="exercises" {...provided.droppableProps} ref={provided.innerRef}>
                  {props.programDays.map(({id, title, thumb, uid}, index) => {
                
                    return (
                      <Draggable key={uid} draggableId={uid.toString()} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="exercises-thumb">
                              <img src={thumb} alt={`${title} Thumb`} />
                            </div>
                            <p>
                              { title }
                            </p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
      
        );
        
}

export default DayList