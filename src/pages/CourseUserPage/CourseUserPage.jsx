import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import "./courseUserPage.css"

export const CourseUserPage = () => {
    return (
        <div className='courseWrapper'>
            <SideBar />
            <div>
                <div className="course-user-header-block">
                    <div className="course-user-header-block_btnTitle">
                        <span className='course-user-header-block_btnTitle-title'>Математика</span>
                    </div>
                    <div className='course-user-header-block_subsInfoBtn'>
                    </div>
                </div>
                <div className="course-user-lessons-list">
                    <div className="course-user-lessons-list-item">
                        <div className="course-user-lessons-list-item-title">
                           Урок №1
                             </div>  
                                <div className="course-user-lessons-list-item-btn">
                                Перейти
                                </div>              
                             </div>
                </div>
            </div>

        </div>
    )
}
