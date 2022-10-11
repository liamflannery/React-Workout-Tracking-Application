import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
const DayList = () =>{
    const dayList = [
        {
          id: 'monday',
          name: 'Monday',
          thumb: '/images/dumbell.png'
        },
        {
            id: 'tuesday',
            name: 'Tuesday',
            thumb: '/images/dumbell.png'
        }
    ]
    const [days, updateDays] = useState(dayList);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

            const items = Array.from(days);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            updateDays(items);
    }
        
        return (
       
        <div className="App">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="days">
              {(provided) => (
                <ul className="exercises" {...provided.droppableProps} ref={provided.innerRef}>
                  {days.map(({id, name, thumb}, index) => {
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

export default DayList