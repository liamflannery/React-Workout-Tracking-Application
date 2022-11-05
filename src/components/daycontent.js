import React, { useState, useEffect } from 'react';
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import axios from "axios";
import dayService from '../services/days'
import { fontStyle } from '@mui/system';

const Daycontent = () => {
  const [days, setDays] = useState([]); 
  const [exercises, setExercises] = useState([]);   
  // const [exercise, setExercise] = useState([]);   
  const [exerciseText, setExerciseText] = useState(["exercises..."])
  
  //Get all days data from our backend
  const getDays = async() => {
    const daysParam = await dayService.getAllDays()
    setDays(daysParam.days.days)
    console.log("DAYS PARAM");
    console.log(daysParam.days.days)
    
  }

  //Get all exercises data from our backend
  const getExercises= async(id) => {
    const exercisesParam = await dayService.getAllExercises()
    setExercises(exercisesParam.exercises)
    
  }

  // const getExercise = async(id) => {
  //   const exerciseParam = await dayService.getExercise(id)
  //   setExercise(exerciseParam)
  //   //console.log("UNIQUE EXERCISE SET PARAM");
  //   //console.log(exerciseParam)

  // }

  //Get all exercise data depending on days id from our backend
  const exerciseName = (id) => {
    const names = []
    console.log("exercises: ", exercises)
    exercises.exercises.forEach(exercise => {
      console.log(exercise)
      if(exercise.id == id){
        names.push(exercise.name)
      }
    })
    setExerciseText(names)
  }

  useEffect(() => {
    getDays();
    getExercises();
    //getExercise();
  }, []);

  useEffect(() => {
    //exerciseName(0)
  }, [exercises]);

  

  return (
  <Segment>
    <Header as='h2' floated='right'>
    {days.map((day) => {
      return(
        <Link to="/day" style={{ textDecoration: 'none' , color: 'white'}}>
      <div className="daycontainer" style ={{fontSize: '38px'}}>
      <ul>
        <div className='daytitlecontainer' style ={{fontWeight: 'bold'}}>
        {/* displays title of day */}
        <ul>{day.title}</ul>
        </div>
        
        <ul>
          <div className='workoutcontainer' style={{fontStyle: 'italic'}}>
            {/* displays exercise list of day */}
            {exerciseText}
          </div>
        </ul>
      </ul> 
      </div>
      </Link>
    )
    })}
    </Header>
    <Divider clearing />
  </Segment>
  )
}

export default Daycontent