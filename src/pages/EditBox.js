import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const EditBox = (props) => {

    return (
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          key={[props.columnId]}
        >
          <h2>{props.column.name}</h2>
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
                        : "lightgrey",
        
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
                                <img src={item.thumb} alt={`${item.name} Thumb`} />
                            </div>
                            <p>
                                { item.name }
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