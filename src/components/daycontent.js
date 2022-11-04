import React, { useState, useEffect } from 'react';
//import React from 'react'
//import React, { useState, useEffect } from 'react';
//import { useEffect, useState } from "react";
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import axios from "axios";
import dayService from '../services/days'
import { fontStyle } from '@mui/system';

const Daycontent = () => {
  const dayData = [
    { 
      id: 1,
      title: "Day 1",
      workout: [
        "Bench Press",
        "Deadlift",
        "Squats"
      ]
    },
    { 
      id: 2,
      title: "Day 2",
      workout: [
        "Barbell Squats",
        "Running",
        "Situps",
        "Something",
      ] 
    },
    { 
      id: 3,
      title: "Day 3",
      workout: [
        "Pull-Ups",
        "Skipping",
        "Chin-ups"
      ]
    },
    { 
      id: 4,
      title: "Day 4",
      workout: [
        "Seated Cable Rows",
        "Push Ups",
      ]
    },
    { 
      id: 5,
      title: "Day 5",
      workout: [
        "Bicep Curls",
        "Lateral Pull Downs",
        "Something",
        "Something",
        "Something",
      ]
    },
  ];

  const [days, setDays] = useState([]);
  const [programs, setPrograms] = useState([]);   
  const [exercises, setExercises] = useState([]);   
  const [exercise, setExercise] = useState([]);   
  const [isAmpleSize, setIsAmpleSize] = useState(false);
  const [test, setTest] = useState([]);
  const [exerciseText, setExerciseText] = useState(["exercises..."])
  const getTest = async() => {
    setTest(dayData)
  }

  const getPrograms = async() => {
    const programsParam2 = await dayService.getAllPrograms()
    setPrograms(programsParam2.programs.programs)
    console.log("PROGRAMS PARAM");//, programsParam);
    console.log(programsParam2.programs.programs)
    
  }


  const getDays = async() => {
    const daysParam = await dayService.getAllDays()
    setDays(daysParam.days.days)
    console.log("DAYS PARAM");
    console.log(daysParam.days.days)
    
  }


  const getExercises= async(id) => {
    const exercisesParam = await dayService.getAllExercises()
    setExercises(exercisesParam.exercises)
    
  }

  const getExercise = async(id) => {
    const exerciseParam = await dayService.getExercise(id)
    setExercise(exerciseParam)
    //console.log("UNIQUE EXERCISE SET PARAM");
    //console.log(exerciseParam)

  }

  const plusdata= () => {
    if(test.length>=3){
      {test.map((exercise) => {
      return(
        <>
          + {[exercise.workout.length]-2} more
        </>
      )
    })}
    }
  }

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
    getPrograms();
    getDays();
    getExercises();
    getExercise();
    getTest();
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
        <ul>{day.title}</ul>
        </div>
        
        <ul>
          <div className='workoutcontainer' style={{fontStyle: 'italic'}}>
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