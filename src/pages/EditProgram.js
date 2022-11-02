import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import EditBox from "../components/editComponents/EditBox";
import OnDragEnd from "../components/editComponents/OnDragEnd";
import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import DayList from '../components/editComponents/DayList';
import dayService from '../services/days';
import { withTheme } from "@emotion/react";
import AddDay from "../components/editComponents/AddDay";
import { v4 as uuid } from 'uuid';
import { CompareSharp } from "@mui/icons-material";




const EditProgram = () => {
  const programId = useParams().id
  const navigate = useNavigate()
  const editDay = () => {
      navigate('/edit/day')
  }
  
  const [items, setItems] = useState([])

  const [programDays, setProgramDays] = useState([])
  const [allDays, setAllDays] = useState([])
  
  const updateProgram = async() => {
    const dayIds = []
    programDays.forEach(element => {
      dayIds.push(element.id)
    })
    console.log("updating")
    await dayService.updateProgram(programId, dayIds)
  }
  const addDay = (element) => {
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
     setProgramDays(items)
     //updateProgram()
  }, [items])

  useEffect(() => {
    //updateProgram()
 }, [programDays])

  useEffect(() => {
    getProgramDays()
 }, [allDays])



  const getDays = async() => {
    const daysParam = await dayService.getAllDays()
    setAllDays(daysParam.days.days)
  }

  const getProgramDays = async() => {
    const program = await dayService.getProgram(programId)
    const days = []
    program[0].days.forEach(element => {
      allDays.forEach(day => {
        if(day.id == element){
          const addDay = 
            {id : day.id,
              title: day.title,
              thumb: day.thumb,
              uid: uuid()
            }
          if(!items.includes(addDay)){
            days.push(addDay)
          }
          
        }
      })
    });
    if(items.length != days.length){
      setItems(days)
    }
    
  }



  useEffect(() => {
      getDays()
    }, []);


 

  return (
    <div class = "container">
      <header className="App-header">
       
          <h1> Program Page</h1>
                      
              <div class="row">
                  <div class="seven columns">
                  <input class="u-full-width" type="email" placeholder="Enter program name..." id="exampleEmailInput"/>
                  <label for="exampleDay">Program Days</label>
                  {/* <EditBox columnId = {Object.entries(columns)[0][0]} column = {Object.entries(columns)[0][1]} /> */}
                  <DayList programDays = {programDays} setProgramDays = {setProgramDays} />
                  </div>
                  <div class="five columns">
                  <label for="exampleRecipientInput">All Days</label>
                      {allDays.map((item, index) => {
                        return(
                          <AddDay item = {item} index = {index} addDay = {addDay}/>
                        )
                      }
                      )}

                      <input class="button-primary" type="submit" value="+Day"/>
                  </div>

              </div>
    

      </header>
    </div>
  );
}

export default EditProgram;
