import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
const DayPage = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <Link to="/program">Back to program</Link>
                <h1>Day Page</h1>
                
            </header>
        </div>
            
        );
        
}

export default DayPage