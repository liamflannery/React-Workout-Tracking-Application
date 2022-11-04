import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import EditBox from "../components/editComponents/EditBox";
import OnDragEnd from "../components/editComponents/OnDragEnd";
import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import ExerciseList from '../components/editComponents/ExerciseList';
import dayService from '../services/days';
import { withTheme } from "@emotion/react";
import AddExercise from "../components/editComponents/AddExercise";
import { v4 as uuid } from 'uuid';
import { CompareSharp } from "@mui/icons-material";

const EditExercise = () =>{
    const dayId = useParams().id


    
    const [items, setItems] = useState([])
  
    const [dayExercises, setDayExercises] = useState([])
    const [allExercises, setAllExercises] = useState([])
    
    const updateDay = async() => {
      const exerciseIds = []
      dayExercises.forEach(element => {
        exerciseIds.push(element.id)
      })
      console.log("updating")
      await dayService.updateDay(dayId, exerciseIds)
    }
    const addExercise = (element) => {
      console.log(items, element)
      const addElement = 
          {id : element.id,
            title: element.title,
            thumb: element.thumb,
            uid: uuid()
          }
      
      setItems(items.concat(addElement))
    
      console.log("add element")
    }
  
    
    useEffect(() => {
       setDayExercises(items)
       //updateDay()
    }, [items])
  
    useEffect(() => {
      //updateDay()
   }, [dayExercises])
  
    useEffect(() => {
      getDayExercises()
   }, [allExercises])
  
  
  
    const getExercises = async() => {
      const exercisesParam = await dayService.getAllExercises()
      
      setAllExercises(exercisesParam.exercises.exercises)
    }
  
    const getDayExercises = async() => {
      const day = await dayService.getDay(dayId)
      const exercises = []
      day[0].exercises.forEach(element => {
        allExercises.forEach(exercise => {
          if(exercise.id == element){
            const addExercise = 
              {id : exercise.id,
                title: exercise.title,
                thumb: exercise.thumb,
                uid: uuid()
              }
            if(!items.includes(addExercise)){
              exercises.push(addExercise)
            }
            
          }
        })
      });
      if(items.length != exercises.length){
        setItems(exercises)
      }
      
    }
  
  
  
    useEffect(() => {
        getExercises()
      }, []);
        
        return (
            <div class = "container">
                <header className="App-header">
                
                    <h1> Day Page</h1>
                                
                        <div class="row">
                            <div class="seven columns">
                            <input class="u-full-width" type="email" placeholder="Enter day name..." id="exampleEmailInput"/>
                            <label for="exampleExercise">Exercise Exercises</label>
                            {/* <EditBox columnId = {Object.entries(columns)[0][0]} column = {Object.entries(columns)[0][1]} /> */}
                            <ExerciseList dayExercises = {dayExercises} setDayExercises = {setDayExercises} />
                            </div>
                            <div class="five columns">
                            <label for="exampleRecipientInput">All Exercises</label>
                                {allExercises.map((item, index) => {
                                    return(
                                        <AddExercise item = {item} index = {index} addExercise = {addExercise}/>
                                    )
                                }
                                )}

                                <input class="button-primary" type="submit" value="+Exercise"/>
                            </div>

                        </div>
                

                </header>
    </div>
            
        );
        
}

export default EditExercise