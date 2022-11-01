import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import EditBox from "../components/EditBox";
import OnDragEnd from "../components/OnDragEnd";
import { Outlet, Link, useNavigate } from "react-router-dom";
import DayList from '../components/DayList';
import dayService from '../services/days';





const EditProgram = () => {
  
  const navigate = useNavigate()
  const editDay = () => {
      navigate('/edit/day')
  }
  const itemsFromBackend = [
    {
      id: uuid(),
      title: 'Monday',
      thumb: '/images/dumbell.png'
    },
    {
        id: uuid(),
        title: 'Tuesday',
        thumb: '/images/dumbell.png'
    },
    {
      id: uuid(),
      title: 'Wed',
      thumb: '/images/dumbell.png'
    }
]
const testfrombackend = [
  {
    id: uuid(),
    title: 'fronddat',
    thumb: '/images/dumbell.png'
  },
  {
      id: uuid(),
      title: 'Tuesday',
      thumb: '/images/dumbell.png'
  },
  {
    id: uuid(),
    title: 'Wed',
    thumb: '/images/dumbell.png'
  }
]
  const [programDays, setProgramDays] = useState(itemsFromBackend)
  const [allDays, setAllDays] = useState([])
      
  const columnsFromBackend = {
    [uuid()]: {
      title: "Program Days",
      items: programDays
    },
    [uuid()]: {
      title: "All Days",
      items: allDays
    },

  };
  
  const [columns, setColumns] = useState(columnsFromBackend);
  const updateColumns = (newColumn) => {
    setColumns(newColumn)
    setProgramDays(Object.entries(newColumn)[0][1].items)
    setAllDays(Object.entries(newColumn)[1][1].items)
  }
  const[testState, setTestState] = useState(["nice"])
  const getDays = async() => {
    const daysParam = await dayService.getAllDays()
    setProgramDays(daysParam.days.days)
}


  return (
    <div class = "container">
    <header className="App-header">
    <DragDropContext
        onDragEnd={result => OnDragEnd(result, columns, updateColumns)}
      >
    <h1> Program Page</h1>
                
                    <div class="row">
                        <div class="seven columns">
                        <input class="u-full-width" type="email" placeholder="Enter program name..." id="exampleEmailInput"/>
                        <label for="exampleDay">Program Days</label>
                        <EditBox columnId = {Object.entries(columns)[0][0]} column = {Object.entries(columns)[0][1]} />
                        </div>
                        <div class="five columns">
                        <label for="exampleRecipientInput">All Days</label>
                          <EditBox columnId = {Object.entries(columns)[1][0]} column = {Object.entries(columns)[1][1]} />
                            <input class="button-primary" type="submit" value="+Day"/>
                        </div>
                       
                    </div>
                   
                   
                   
                    <button onClick={() => {getDays()}}>Get Days</button>
                    <button onClick={() => {console.log(allDays)}}>Print All Days</button>
                    <button onClick={() => {console.log(programDays)}}>Print Program Days</button>
                    <button onClick={() => {console.log(columns)}}>Print Columns</button>
                    <button onClick={() => {setProgramDays(testfrombackend)}}>Update Test</button>
                    <button onClick={() => {setColumns(columnsFromBackend)}}>Update Columns</button>
                    
                  
 
        
        
       
      </DragDropContext>
      </header>
    </div>
  );
}

export default EditProgram;
