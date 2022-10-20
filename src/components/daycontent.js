import React, { useState, useEffect } from 'react';
//import React from 'react'
//import React, { useState, useEffect } from 'react';
//import { useEffect, useState } from "react";
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import axios from './utils/axios';

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
        "Situps",
        "Something",
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
        "Push Ups",
        "something",
        "Something", 
      ]
    },
    { 
      id: 5,
      name: "Day 5",
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

  useEffect(() => {
    setDays(dayData);
  }, []);

  const baseURL = 'https://api.example'
  const APIKey = 'api_key=example'

  const gettests = () => {
	return axios
		.get(
			baseURL + `/top_rated?${APIKey}&language=en-US&page=1%27`,
		)
		.then(response => response.data.results)
  }

  const gettest = (testid) => {
	return axios
		.get(
			`${baseURL}/${testid}?${APIKey}&language=en-US`,
		)
		.then(response => response.data)
  }

  const getDays = () => {
    return axios.get(baseURL)
        .then(response => response)
}
  const getDay = (dayid) => {
    return axios.get(`${baseURL}/${dayid}?&language=en-US`)
      .then(response => response)
}

  const createDay = (newObject) => {
    return axios.post(baseURL, newObject)
        .then(response => response.data)
}
  
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