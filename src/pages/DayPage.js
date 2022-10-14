
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState} from 'react';


const DayPage = () => {
   
    const Workout = [
        {
           
          id: "set",
          name: "Sets:",
         input:'text'
        },
        {
            id: "rep",
            name: "Reps:",
            input:'text'
         
        },
        {
            id: "weight",
          name: "Weight:",
          input:'text'
          
        },
      ];
      
      const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }
     
      
const [value,setValue]=useState('');
const handleSelect=(e)=>{
   console.log(e);
   setValue(e)
}


return (
    
    <div class = "App.container">
<DropdownButton
      
title="Day 1 Workout"
id="dropdown-menu-align-right"
onSelect={handleSelect}
>

      <Dropdown.Item eventKey="Bench Press">Bench Press</Dropdown.Item>
      
      <Dropdown.Item eventKey="Incline Bench Press">Incline Bench Press</Dropdown.Item>
      
      <Dropdown.Item eventKey="Cable Fly's">Cable Fly's</Dropdown.Item>
        
      <Dropdown.Item eventKey="Overhead Press">Overhead Press</Dropdown.Item>
      
</DropdownButton>
<h4> {value}</h4> 


 <div className="wrapper">

 <form onSubmit={handleSubmit}>
   <fieldset>
     <label>
      
       <p>Reps</p>
       <input name1="Reps" />
       
       <p2>Weight</p2>
       <input name2="Weight" /> 
     </label>
   </fieldset>
   <div class="main">Completed
        <input type="checkbox"/>
        <span class="mark"></span>
    </div>
   <button type="submit">Submit</button>
  
 </form>
 
</div>
<div className="wrapper2">
<form onSubmit={handleSubmit}>
   <fieldset>
     <label>
      
       <p>Reps</p>
       <input name1="Reps" />
      
       <p2>Weight</p2>
       <input name2="Weight" /> 
     </label>
   </fieldset>
   <button type="submit">Submit</button>
 </form>
 <div class="main">Completed
        <input type="checkbox"/>
        <span class="mark"></span>
    </div>
</div>
<div className="wrapper3">
<form onSubmit={handleSubmit}>
   <fieldset>
     <label>
      
       <p>Reps</p>
       <input name1="Reps" />
     
       <p2>Weight</p2>
       <input name2="Weight" /> 
     </label>
   </fieldset>
   <div class="main">Completed
        <input type="checkbox"/>
        <span class="mark"></span>
    </div>
   <button type="submit">Submit</button>
 </form>
</div>
<div className="wrapper4">
<form onSubmit={handleSubmit}>
   <fieldset>
     <label>
      
       <p>Reps</p>
       <input name1="Reps" />
      
       <p2>Weight</p2>
       <input name2="Weight" /> 
     </label>
   </fieldset>
   <div class="main">Completed
        <input type="checkbox"/>
        <span class="mark"></span>
    </div>
   <button type="submit">Submit</button>
  
 </form>
</div>
</div>

);
}

export default DayPage