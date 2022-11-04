import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
import Daycontent from '../components/daycontent';
import dayService from '../services/days';
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

        return (
        <div className= "container">
            <header className="App-header">
                <h1>Your Program</h1>
               
                <Daycontent/>
            </header>
        </div>
            
        );
        
}

export default ProgramPage
