import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import ExerciseList from '../components/editComponents/ExerciseList';
import dayService from '../services/days';
import AddExercise from "../components/editComponents/AddExercise";
import { v4 as uuid } from 'uuid';


const EditExercise = () =>{
    const dayId = useParams().id


    
    const [items, setItems] = useState([])
  
    const [dayExercises, setDayExercises] = useState([])
    const [allExercises, setAllExercises] = useState([])
     //updates the data on the backend when changed
    // const updateDay = async() => {
    //   const exerciseIds = []
    //   dayExercises.forEach(element => {
    //     exerciseIds.push(element.id)
    //   })
    //   console.log("updating")
    //   await dayService.updateDay(dayId, exerciseIds)
    // }

    //adds exercise from all exercises list to program days list
    const addExercise = (element) => {
      console.log(items, element)
      const addElement = 
          {id : element.id,
            title: element.title,
            thumb: element.thumb,
            uid: uuid()
          }
      
      setItems(items.concat(addElement))

    }
  
    //update day exercise
    useEffect(() => {
       setDayExercises(items)
    }, [items])
  

    //calls day exercises from the backend
    useEffect(() => {
      getDayExercises()
   }, [allExercises])
  
  
   //get all exercises from the backend
    const getExercises = async() => {
      const exercisesParam = await dayService.getAllExercises()
      
      setAllExercises(exercisesParam.exercises.exercises)
    }
    //get the exercises of a specific day using that days exercise ids
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
                           {/* display current exercises in day */}
                            <ExerciseList dayExercises = {dayExercises} setDayExercises = {setDayExercises} />
                            </div>
                            <div class="five columns">
                                {/* display all exercises */}
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