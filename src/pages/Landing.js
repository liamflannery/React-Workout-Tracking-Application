import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
import Login from './Landing/Login';
import Register from './Landing/Register';

const Landing = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <Login/>
                <Register/>
                <Link to="/program">Login</Link>
            </header>
        </div>
            
        );
        
}

export default Landing