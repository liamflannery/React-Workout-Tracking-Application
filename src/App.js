import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stopwatch from './components/Stopwatch';
import WorkoutPage from './pages/WorkoutPage'

function App() {
  
  return (

    <div className="App">
       
      <Stopwatch></Stopwatch>
      <WorkoutPage/>
  
      </div>
      
     );
     

}
export default App;