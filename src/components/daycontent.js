import React from 'react'
//import React, { useState, useEffect } from 'react';
import { useEffect, useState } from "react";
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const dayData = [
  { 
    id: 1,
    name: "Monday",
    workout: [
      "Bench Press",
      "Deadlift"
    ]
  },
  { 
    id: 2,
    name: "Tuesday",
    workout: [
      "Barbell Squats"
    ] 
  },
  { 
    id: 3,
    name: "Wednesday",
    workout: [
      "Pull-Ups",
    ]
  },
  { 
    id: 4,
    name: "Thursday",
    workout: [
      "Seated Cable Rows" 
    ]
  },
  { 
    id: 5,
    name: "Friday",
    workout: [
      "Bicep Curls"
    ]
  },
];

/* 
const [days, setDays] = useState([]);

useEffect(() => {
  setDays(dayData);
}, []);

const handleChange = (e) => {
  const { name, checked } = e.target;
  if (name === "allSelect") {
    let tempDay = days.map((day) => {
      return { ...day, isChecked: checked };
    });
    setDays(tempDay);
  } else {
    let tempDay = days.map((day) =>
    day.name === name ? { ...day, isChecked: checked } : day
    );
    setDays(tempDay);
  }
};

*/
const daycontent = (title) => (
  <Segment>
    <Link to="/day">
    <Header as='h2' floated='right'>
      Day
    </Header>
    </Link>

    <Divider clearing />
    <p>Bench press + 3 more...</p>
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    
  </Segment>
  
)
/*
const test = () => (
  <div className="container my-4" style={{ width: "500px" }}>
  <form className="form w-100">
    <h3>Schedule</h3>
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        name="allSelect"
        // checked={
        //   days.filter((day) => day?.isChecked !== true).length < 1
        // }
        checked={!days.some((day) => day?.isChecked !== true)}
        onChange={handleChange}
      />
      <label className="form-check-label">All Select</label>
    </div>
    {days.map((day, index) => (
      <div className="form-check" key={index}>
        <input
          type="checkbox"
          className="form-check-input"
          name={day.name}
          checked={day?.isChecked || false}
          onChange={handleChange}
        />      
        <label className="form-check-label">
          {day.name}
            <ul>
              {day.workout}
            </ul> 
        </label>

      </div>
    ))}
  </form>
</div>
)
*/

export default daycontent