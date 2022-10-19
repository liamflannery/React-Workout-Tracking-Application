import React, { useState, useEffect } from 'react';
//import React from 'react'
//import React, { useState, useEffect } from 'react';
//import { useEffect, useState } from "react";
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Daycontent = () => {
  const dayData = [
    { 
      id: 1,
      name: "Day 1",
      workout: [
        "Bench Press",
        "Deadlift",
        "Squats"
      ]
    },
    { 
      id: 2,
      name: "Day 2",
      workout: [
        "Barbell Squats",
        "Running",
        "Situps"
      ] 
    },
    { 
      id: 3,
      name: "Day 3",
      workout: [
        "Pull-Ups",
        "Skipping",
        "Chin-ups"
      ]
    },
    { 
      id: 4,
      name: "Day 4",
      workout: [
        "Seated Cable Rows",
        "Push Ups" 
      ]
    },
    { 
      id: 5,
      name: "Day 5",
      workout: [
        "Bicep Curls",
      ]
    },
  ];

  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(dayData);
  }, []);


  return (
  <Segment>
    <Header as='h2' floated='right'>
      {days.map((day) => {
      return(
      <ul>
        <Link to="/day">
        <ul>{day.name}</ul>
        </Link>
        
        <ul>
          {day.workout[0]}, {day.workout[1]} + {[day.workout.length]-2} more
        </ul>
      </ul>
      )
      })}
    </Header>
    <Divider clearing />
  </Segment>
  )
}

export default Daycontent