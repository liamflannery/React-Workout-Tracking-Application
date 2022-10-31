import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import DayList from '../components/DayList';
import { Outlet, Link, useNavigate } from "react-router-dom";
const WorkoutPage = () =>{
        const navigate = useNavigate()
        const editDay = () => {
            navigate('/edit/day')
        }
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1> Program Page</h1>
                <form onSubmit = {editDay}>
                    <div class="row">
                        <div class="seven columns">
                        <input class="u-full-width" type="email" placeholder="Push Pull Legs" id="exampleEmailInput"/>
                        <label for="exampleDay">Days</label>
                            <DayList/>
                        </div>
                        <div class="five columns">
                        <label for="exampleRecipientInput">Days</label>
                            <DayList/>
                            <input class="button-primary" type="submit" value="+Day"/>
                        </div>
                       
                    </div>
                   
                   
                   
                    <input class="button-primary" type="submit" value="Create Program"/>
                    </form>
          
            </header>
        </div>
            
        );
        
}

export default WorkoutPage