import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import DayList from '../components/editComponents/DayList';
import dayService from '../services/days';
import AddDay from "../components/editComponents/AddDay";
import { v4 as uuid } from 'uuid';


const EditProgram = () => {
  const programId = useParams().id
  
  const [items, setItems] = useState([])

  const [programDays, setProgramDays] = useState([])
  const [allDays, setAllDays] = useState([])
  
  //updates the data on the backend when changed
  // const updateProgram = async() => {
  //   const dayIds = []
  //   programDays.forEach(element => {
  //     dayIds.push(element.id)
  //   })
  //   console.log("updating")
  //   await dayService.updateProgram(programId, dayIds)
  // }

  //adds day from all days list to program days list
  const addDay = (element) => {
    console.log(items, element)
    const addElement = 
        {id : element.id,
          title: element.title,
          thumb: element.thumb,
          uid: uuid()
        }
    setItems(items.concat(addElement))
  }

  //updates program days
  useEffect(() => {
     setProgramDays(items)
  }, [items])

  //calls program days from the backend
  useEffect(() => {
    getProgramDays()
 }, [allDays])

 //gets all days from the backend
  const getDays = async() => {
    const daysParam = await dayService.getAllDays()
    setAllDays(daysParam.days.days)
  }

  //gets the days of a specific program using that programs day ids
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
                    {/* displays current days in program  */}
                    <DayList programDays = {programDays} setProgramDays = {setProgramDays} />
                  </div>
                  <div class="five columns">
                    {/* displays all days, with the ability to add each one to the current program */}
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
