import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
const ProgramPage = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1>Program Page</h1>
                <Link to="/day">Day 1</Link>
            </header>
        </div>
            
        );
        
}

export default ProgramPage
