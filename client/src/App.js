import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import Chat from './Chat'

import { fetchAllUsers } from './actions/users'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
    
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes/>
         <Chat />

      </Router>
    </div>
  );
}

export default App;

