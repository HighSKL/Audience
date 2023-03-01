import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AuthPage from './Components/AuthPage/AuthPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';

type PropsType = {
  state: object
}

const App: React.FC<PropsType> = () => {

  const navigation = useNavigate()

  // useEffect(()=>{
  //   navigation('/auth')
  // }, [])

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
    </div>
  );
}

export default App;
