import React, { useState,useEffect} from 'react';
//import ReactDOM from 'react-dom/client'
//import Excercises from "./Excercise";
import dayService from '../services/days';
import Collapsible from 'react-collapsible';
//import axios from "axios";
import  "./DayPage.css";
import { fontSize } from '@mui/system';

const DayPage =() => {

  const columns = [
    {
      title: "Exercises",
      key: "exercises"
    },
    {
      title: "Reps",
      key: "reps"
    },
    {
      title: "Weight",
      key: "weight"
    }
   
  ];
  const data = [
    {
      id:1,
      exercises: "Bench Press",
      reps: "8",
      
      weight: "70kg",
         
     
    },
    { id:2,
      exercises: "Leg Press",
      reps: "6",
      weight: "90kg",
      child: [
        {
          excercises: "",
          reps: "6",
          weight: "140kg"
        },
        {
          excercises: "",
          reps: "6",
          weight: "160kg"
        },
      ]
    },
        { 
          id:3,
          exercises: "Squats",
          reps: "8",
          weight: "80kg",
          input: "checkbox",
          child: [
            {
              exercises: "",
              reps: "6",
              weight: "80kg"
            },
            {
              exercises: "",
              reps: "4",
              weight: "100kg"
            },
          
          ]
    },
  
  { id:4,
    exercises: "Incline Bench Press",
    reps: "10",
    weight: "50kg",
    child: [
      {
        exercises: "",
        reps: "8",
        weight: "55kg"
      },
      {
        exercises: "",
        reps: "6",
        weight: "60kg"
      },
    ]
  }
];


  const [day, setDayName] = useState()
   
     
   const getCurrentDay = async() => {
   
        
      const dayParam = await dayService.getDay(0)
    setDayName(dayParam.day.day)
    console.log("DAY PARAM");
    console.log(dayParam.day.day)
  
       
     

   }
  
   useEffect(() => {
     getCurrentDay();
     

   },[]);
   
     return (
       <div className="container">
        <header className="App-header">
         

         <table>
         <tr style={{ 'backgroundColor': '#1876D3', 'color' : 'white' }}>
             <th>Day 1 Workout</th>
           </tr>
          
           {data.map((title, key) => {
             return (
              <tr>
              <div class="row">
                <div class="nine columns" >
                  
                  <Collapsible trigger={<h3>{title.exercises}</h3>}>  
                  <tr key={key}>
                    <th>
                      <input class="u-max-full-width" type="text" placeholder={title.weight} id="exampleEmailInput" style={{width:65, fontSize:17}}/> <br/>
                      <input class="u-max-full-width" type="text" placeholder="80kg" id="exampleEmailInput" style={{width:65, fontSize:17}}/> <br/>
                      <input class="u-max-full-width" type="text" placeholder="80kg" id="exampleEmailInput" style={{width:65, fontSize:17}}/>
                    </th>
                    <th>
                      <input class="u-max-full-width" type="text" placeholder={title.reps} id="exampleEmailInput" style={{width:65, fontSize:17}}/> <br/>
                      <input class="u-max-full-width" type="text" placeholder="6" id="exampleEmailInput" style={{width:65, fontSize:17}}/> <br/>
                      <input class="u-max-full-width" type="text" placeholder="6" id="exampleEmailInput" style={{width:65, fontSize:17}}/>
                    </th>
                    <th>
                      <img src='./images/tick.png' style={{background:"white", width:30, height:30, cursor:'pointer'}}/> <br/>
                      <img src='./images/tick.png' style={{background:"white", width:30, height:30, cursor:'pointer'}}/> <br/>
                      <img src='./images/tick.png' style={{background:"white", width:30, height:30, cursor:'pointer'}}/> 
                    


                    </th>
                  
                  
             
          
                 </tr>
                </Collapsible> 
                
                </div>
                <div class="one column" >
                
                <img src='./images/tick.png' style={{background:"white", width:40, height:40, cursor:'pointer'}}/> 
           
                </div>
                </div>
                </tr>
                
               
             )
           })}
            
         
         </table>
           </header>
         </div>
   
     );
   
}
   export default DayPage;