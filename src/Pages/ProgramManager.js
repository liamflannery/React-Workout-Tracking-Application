import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
const ProgramManager = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1>Program Manager</h1>
                <Link to="/edit/program">Edit Program 1</Link>
            </header>
        </div>
            
        );
        
}

export default ProgramManager