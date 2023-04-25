import React from 'react'
import './App.css';
import { LoginPage } from "./pages/loginPage/LoginPage"
import { RegPage } from "./pages/regPage/RegPage"
import { Route, Routes } from 'react-router-dom';
import { CoursePage } from './pages/CoursePage/CoursePage';
import { CoursesPages } from './pages/CoursesPages/CoursesPages';

function App() {

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<LoginPage/>}/>
        <Route path={"/regPage"} element={<RegPage/>}/>
        <Route path={"/coursePage"} element={<CoursePage/>}/>
        <Route path={"/coursesPages"} element={<CoursesPages/>}/>
      </Routes>
    </div>
  );
}

export default App;
