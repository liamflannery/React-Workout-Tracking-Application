import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import DayList from './DayList';
const WorkoutPage = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1> Program Page</h1>
                <form>
                    <div class="row">
                        <div class="seven columns">
                        <input class="u-full-width" type="email" placeholder="Push Pull Legs" id="exampleEmailInput"/>
                        <label for="exampleMessage">Days</label>
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