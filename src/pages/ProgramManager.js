import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
const ProgramManager = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1>Edit Manager</h1>
                <div class="row" >
                    <div class="seven columns">
                        <Link to="/edit/program/0" >Program 1</Link> <br/>
                        <Link to="/edit/program/1">Program 2</Link> <br/>
                        <Link to="/edit/program/2">Program 3</Link> 
                    </div>
                    <div class="five columns">
                        <Link to="/edit/day/0">Day 1</Link> <br/>
                        <Link to="/edit/day/1">Day 2</Link> <br/>
                        <Link to="/edit/day/2">Day 3</Link> 
                    </div>
                </div>
            </header>
        </div>
            
        );
        
}

export default ProgramManager