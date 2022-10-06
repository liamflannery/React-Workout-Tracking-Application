import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Stopwatch from './components/Stopwatch'

function App() { 
  const [value,setValue]=useState('');
 const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
 }


  return (

    <div className="App container">
      <Stopwatch></Stopwatch>
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
      </div>
      
    
  

  
);
}

export default App;