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
import { SubsPages } from "./pages/SubsPages/SubsPages";
import { AllCourses } from "./pages/AllCourses/AllCourses";
import { FollowerPage } from "./pages/FollowerPage/FollowerPage";
import { FollowerPageMan } from "./pages/FollowerPageMan/FollowerPageMan";
import { AuthRequire } from './hooks/AuthRequire';
import { PAGES } from './constants';
import { SmartCircle } from './pages/SmartCircle';

function App() {
  return (
    <div>
      <Routes>
        <Route path={PAGES.INDEX} element={<LoginPage/>}/>
        <Route path={PAGES.REG} element={<RegPage/>}/>
        <Route path={PAGES.SMART} element={ <AuthRequire><SmartCircle/></AuthRequire> }>
          <Route path={PAGES.PERSONAL} element={<PersonalPage/>}/>
          <Route path={PAGES.COURSE} element={<CoursePage/>}/>
          <Route path={PAGES.COURSE_USER} element={<CourseUserPage/>}/>
          <Route path={PAGES.COURSES} element={<CoursesPages/>}/>
          <Route path={PAGES.ADMIN_CLASS} element={<ClassAdminPage/>}/>
          <Route path={PAGES.USER_CLASS} element={<ClassUserPage/>}/>
          <Route path={PAGES.SUBS} element={<SubsPages/>}/>
          <Route path={PAGES.LIBRARY} element={<AllCourses/>}/>
          <Route path={PAGES.FOLLOWER} element={<FollowerPage/>}/>
          <Route path={PAGES.FOLLOWERMAN} element={<FollowerPageMan/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
