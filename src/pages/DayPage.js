import React, { useState,useEffect} from 'react';
//import ReactDOM from 'react-dom/client'
//import Excercises from "./Excercise";
import dayService from '../services/days';
import Collapsible from 'react-collapsible';
//import axios from "axios";
import  "./DayPage.css";

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
      weight: "140kg",
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
           <h1>Day 1 Workout</h1>

         <table>
      
         
           <tr>
             <th>Exercise</th>
             <th>Weight</th>
             <th>Reps</th>
           </tr>
          
           {data.map((title, key) => {
             return (
              <Collapsible trigger="Show Exercise ">  
               <tr key={key}>
              
                 <th>{title.exercises}
                
                 </th>
                 <th>{title.weight}
                 <p>80kg</p>
                 <p>80kg</p>
                 </th>
                 <th>{title.reps}
                <p>6</p>
                <p>6</p>
                
                <input type="checkbox" />Complete
      </th>

                 
                
    
               </tr>
                </Collapsible> 
             )
           })}
            
         
         </table>
       
         </div>
   
     );
   
}
   export default DayPage;