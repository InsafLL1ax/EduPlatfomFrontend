import React from 'react'
import './App.css';
import { LoginPage } from "./pages/loginPage/LoginPage"
import { RegPage } from "./pages/regPage/RegPage"
import { Route, Routes } from 'react-router-dom';
import { CoursePage } from './pages/CoursePage/CoursePage';
import { CourseUserPage } from './pages/CourseUserPage/CourseUserPage';
import { CoursesPages } from './pages/CoursesPages/CoursesPages';
import { ClassAdminPage } from './pages/ClassAdminPage/ClassAdminPage';
import { ClassUserPage } from './pages/ClassUserPage/ClassUserPage';
import { PersonalPage } from './pages/PersonalPage/PersonalPage';


function App() {

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<LoginPage/>}/>
        <Route path={"/regPage"} element={<RegPage/>}/>
        <Route path={"/coursePage"} element={<CoursePage/>}/>
        <Route path={"/courseUserPage"} element={<CourseUserPage/>}/>
        <Route path={"/coursesPages"} element={<CoursesPages/>}/>
        <Route path={"/classAdminPage"} element={<ClassAdminPage/>}/>
        <Route path={"/classUserPage"} element={<ClassUserPage/>}/>
        <Route path={"/personalPage"} element={<PersonalPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
