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
  const [programs, setPrograms] = useState([]);   


  const getPrograms = async() => {
    const programsParam = await dayService.getAllPrograms().programs
    const programsParam2 = await dayService.getAllPrograms()
    setPrograms(programsParam2.programs.programs)
    console.log("PROGRAMS PARAM");//, programsParam);
    console.log(programsParam2.programs.programs)
    
  }
  const createProgram = async() => {
    await dayService.addProgram("New Program")
  }

  //const fetchPrograms = () => {
    //axios.get("http://localhost:8000/api/program/")
    //.then((response) => {
      //console.log("response: ", response)
      //setPrograms(response.data)
    //})
  //}

  useEffect(() => {
    setDays(dayData);
    getPrograms();
    //fetchPrograms();
  }, []);
  
  //const getDays = async() => {
    //const daysParam = await dayService.getDays();
  //}

  //const getPrograms = async() => {
    //return axios
      //.get("http://localhost:3000/program")
      //.then(response => response.data)
  //}

  //const baseURL = 'https://api.example'
  //const APIKey = 'api_key=example'

  //const fetchDays = () => {
    //axios.get("http://localhost:3000/program")
    //.then((response) => {
      //console.log("response: ", response)
      //setDays(response.data)
    //})
  //}

  //const fetchPrograms = () => {
    //axios.get("http://localhost:8000/api/program/")
    //.then((response) => {
      //console.log("response: ", response)
      //setPrograms(response.data)
    //})
  //}


  //useEffect(() => {
    //fetchDays()
    //fetchPrograms()
  //},[])


  //const gettests = () => {
	//return axios
		//.get(
			//baseURL + `/top_rated?${APIKey}&language=en-US&page=1%27`,
		//)
		//.then(response => response.data.results)
  //}

  //const gettest = (testid) => {
	//return axios
		//.get(
			//`${baseURL}/${testid}?${APIKey}&language=en-US`,
		//)
		//.then(response => response.data)
  //}

  //const getDays = () => {
    //return axios.get('http://localhost:3000/day')
        //.then(response => response)
//}
  //const getDay = (dayid) => {
    //return axios.get(`${baseURL}/${dayid}?&language=en-US`)
      //.then(response => response)
//}

  //const createDay = (newObject) => {
    //return axios.post(baseURL, newObject)
        //.then(response => response.data)
//}

  //const deleteDay = (day) => {
    //console.log("delete", day)
    //axios.delete(baseURL + day.id)
    //.then((response) => {
      //console.log("delete succeeded")
    // delete local copy
      //const newDays = days.filter(u => u.id !== day.id)
      //setDays(newDays)
    //})
    //.catch((error) => {
      //console.log("ERROR!")
      // refresh the list of units from the server
      //fetchDays()
    //})
  //}

  //const testgetAll = () => {
    //const request = axios.get(baseURL)
    //return request.then(response => response.data)
  //}

  //const testcreateday = async (newProduct,token) => {
    //const response = await axios.post(baseURL, newProduct, token)
    //return response.data
  //}
  //const testgetDayByid = async (username) => {
    //const response = await axios.post(baseURL, username)
    //return response.data
  //}

  //const testupdateDay = (id, changedProduct) => {
    //const request = axios.put(`${baseURL}/${id}`, changedProduct)
    //return request.then(response => response.data)
  //}

  //const testdeleteDay = async (id) => {
    //const response =  await axios.delete(`${baseURL}/${id}`)
    //return response.data
  //}


  return (
  <Segment>
    
    <Header as='h2' floated='right'>
      {programs.map((program) => {
      return(
        <Link to="/day" style={{ textDecoration: 'none' , color: 'white'}}>
      <div className="daycontainer" style ={{fontSize: '38px'}}>
      <ul>
        <div className='daytitlecontainer' style ={{fontWeight: 'bold'}}>
        <ul>{program.title}</ul>
        </div>
        <ul>
          <div className='workoutcontainer' style={{fontStyle: 'italic'}}>
          {program.days[0]}, {program.days[1]} + {[program.days.length]-2} more
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