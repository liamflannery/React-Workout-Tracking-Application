
import './App.css';
import Landing from './Pages/Landing';
import ProgramPage from './Pages/ProgramPage';
import DayPage from './Pages/DayPage';
import ProgramManager from './Pages/ProgramManager';
import EditProgram from './Pages/EditProgram';
import EditDay from './Pages/EditDay';
import Layout from './Pages/Layout';

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
