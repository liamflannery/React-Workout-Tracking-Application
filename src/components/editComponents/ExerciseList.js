import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../../App.css';
import { v4 as uuid } from 'uuid';
//list exercises as draggable objects
const ExerciseList = (props) =>{
   
  

    function handleOnDragEnd(result) {
        if (!result.destination) return;

            const items = Array.from(props.dayExercises);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            props.setDayExercises(items);
    }
        
        return (
       
        
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="exercises">
              {(provided) => (
                <ul className="exercises" {...provided.droppableProps} ref={provided.innerRef}>
                  {props.dayExercises.map(({id, title, thumb, uid}, index) => {
                
                    return (
                      // lists each exercise as draggable object
                      <Draggable key={uid} draggableId={uid.toString()} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="exercises-thumb">
                              <img src={'/images/'+`${title}`+'.png'} alt={`${title} Thumb`} />
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

export default ExerciseList