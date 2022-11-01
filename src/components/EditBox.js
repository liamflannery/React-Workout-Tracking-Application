import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import '../App.css'
const EditBox = (props) => {

    return (
        
        <div
          style={{
            display: "box",
            flexDirection: "row",
            alignItems: "left"
          }}
          key={[props.columnId]}
        >
          <div style={{ margin: 8 }}>
            <Droppable droppableId={props.columnId} key={props.columnId}>
              {(provided, snapshot) => {
                return (
                  <div
                    className="exercises"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "white",
        
                    }}
                  >
                    {props.column.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return(
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="exercises-thumb">
                                <img src={item.thumb} alt={`${item.title} Thumb`} />
                            </div>
                            <p>
                                { item.title }
                            </p>
                            </li>
                            )
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </div>
      );
  }
export default EditBox