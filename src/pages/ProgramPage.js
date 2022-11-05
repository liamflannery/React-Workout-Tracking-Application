import React from 'react';
import '../App.css';
import Daycontent from '../components/daycontent';
import dayService from '../services/days';
import { useOutletContext } from "react-router-dom";

const ProgramPage = () =>{
    const {user} = useOutletContext();
        return (
        <div className= "container">
            <header className="App-header">
                {/* Page heading */}
                <h1>Your Program</h1> 
                {/* Calling our daycontent component to display our days*/}
                <Daycontent/>
            </header>
        </div>
            
        );
        
}

export default ProgramPage
