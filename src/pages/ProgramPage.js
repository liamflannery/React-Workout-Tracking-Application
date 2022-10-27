import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
import Daycontent from '../components/daycontent';
import { useOutletContext } from "react-router-dom";

const ProgramPage = () =>{
    const {user} = useOutletContext();
    // const getPrograms = async() => {
    //     const programsParam = await dayService.getAllPrograms()
    //     //setPrograms(programsParam.title)
    //     console.log(programsParam);
    // }
    // const createProgram = async() => {
    //     await dayService.addProgram("New Program")
    // }

        console.log(user)
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
