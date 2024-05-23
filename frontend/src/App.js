import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import HomePage from './HomePage/HomePage'
import AddPerson from './AddPerson/AddPerson'
import Admin from './Admin/Admin'
import EditPerson from './EditPerson/EditPerson'
import Login from './Login/Login'
import Protected from './Protected';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);

  const signin = () => {
    setIsSignedIn(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addPerson"
          element={
            <Protected isSignedIn={isSignedIn}>
              <AddPerson />
            </Protected>
          } />
        <Route path="/login"
          element={
            <Login signin={signin} />
          } />
        <Route path='/admin' element={
          <Protected isSignedIn={isSignedIn}>
            <Admin />
          </Protected>
        } />
        <Route path="/editperson/:id" element={
          <Protected isSignedIn={isSignedIn}>
            <EditPerson />
          </Protected>
        } />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
