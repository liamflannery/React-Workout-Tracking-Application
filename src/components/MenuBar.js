import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TuneIcon from '@mui/icons-material/Tune';
import { Outlet, Link, useNavigate } from "react-router-dom";






export default function MenuBar() {
    const navigate = useNavigate()
    const toHome = () => {
        navigate('/program')
    }
    const toEdit = () => {
        navigate('/edit')
    }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        
        <Toolbar>
        <img src = 'images/logo.png' style={{width:60, height:60}}/>
          <Box sx={{ flexGrow: 0.45}} />
          
          <IconButton aria-label="home" onClick={() => {toHome()}}>
                <FitnessCenterIcon fontSize = "large"/>
           </IconButton>
           <IconButton aria-label="settings" onClick={() => {toEdit()}}>
                <TuneIcon fontSize = "large"/>
           </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
