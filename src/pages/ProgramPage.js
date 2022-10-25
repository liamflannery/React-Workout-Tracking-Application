import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
import Daycontent from '../components/daycontent';
import Muidaycontent from '../components/muidaycontent'
import dayService from '../services/days';
const ProgramPage = () =>{
    const getPrograms = async() => {
        const programsParam = await dayService.getAllPrograms()
        //setPrograms(programsParam.title)
        console.log(programsParam);
    }
    const createProgram = async() => {
        await dayService.addProgram("New Program")
    }

        
    return (
    <div class = "container">
        <header className="App-header">
            <h1>Program Page</h1>
            <button onClick = {() => getPrograms()}> Get Programs </button>
            <button onClick = {() => createProgram()}> Add Program </button>
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
