import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import ExerciseList from '../components/ExerciseList';
const EditDay = () =>{
   
        
        return (
        <div class = "container">
            <header className="App-header">
                <h1> New Day</h1>
                <form>
                    <div class="row">
                        <div class="seven columns">
                        <label for="exampleDay">Day Name</label>
                        <input class="u-full-width" type="email" placeholder="Monday" id="exampleEmailInput"/>
                        <label for="exampleDay">Exercises</label>
                        </div>
                        <div class="five columns">
                        <label for="exampleRecipientInput">Exercises</label>
                            <ExerciseList/>
                        </div>
                       
                    </div>
                   
                   
                   
                    <input class="button-primary" type="submit" value="Add Day"/>
                    </form>
          
            </header>
        </div>
            
        );
        
}

export default EditDay