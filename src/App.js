
import './App.css';
import Landing from './pages/Landing';
import ProgramPage from './pages/ProgramPage';
import DayPage from './pages/DayPage';
import ProgramManager from './pages/ProgramManager';
import EditProgram from './pages/EditProgram';
import EditDay from './pages/EditDay';
import Layout from './pages/Layout';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
function App() {
  return (        
            <Router>
              <Routes>
                <Route path="/" element={<Layout />} >
                  <Route index element={<Landing/>}/>
                  <Route path="program" element={<ProgramPage/>} />
                  <Route path="day" element={<DayPage/>} />
                  <Route path="edit" element={<ProgramManager/>} />
                  <Route path="edit/program" element={<EditProgram/>} />
                  <Route path="edit/day" element={<EditDay/>} />  
                </Route>
              </Routes>
            </Router>
    
  );
}

export default App;
