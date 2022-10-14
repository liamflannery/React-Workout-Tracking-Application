import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
import Daycontent from '../components/daycontent';
import Muidaycontent from '../components/muidaycontent'

const ProgramPage = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1>Program Page</h1>
                <Daycontent/>
                <Daycontent/>
                <Daycontent/>
                <Link to="/day">
                </Link>
            </header>
        </div>
            
        );
        
}

export default ProgramPage
