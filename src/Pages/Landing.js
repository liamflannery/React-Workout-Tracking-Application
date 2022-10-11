import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
const Landing = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1>Landing Page</h1>
                <Link to="/program">Login</Link>
            </header>
        </div>
            
        );
        
}

export default Landing