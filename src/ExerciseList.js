import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
const ExerciseList = () =>{
    const exerciseList = [
        {
          id: 'bench',
          name: 'Bench Press',
          thumb: '/images/bench_press.png'
        },
        {
            id: 'squat',
            name: 'Squat',
            thumb: '/images/squat.jpeg'
        }
    ]
    const [exercises, updateExercises] = useState(exerciseList);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

            const items = Array.from(exercises);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            updateExercises(items);
    }
        
        return (
       
        <div className="App">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="exercises">
              {(provided) => (
                <ul className="exercises" {...provided.droppableProps} ref={provided.innerRef}>
                  {exercises.map(({id, name, thumb}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="exercises-thumb">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>
                              { name }
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
      </div>         
        );
        
}

export default ExerciseList