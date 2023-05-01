import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import "./coursePage.css"

export const CoursePage = () => {
    return (
        <div className='courseWrapper'>
            <SideBar />
            <div>
                <div className="course-header-block">
                    <div className="course-header-block_btnTitle">
                        <span className='course-header-block_btnTitle-title'>Математика</span>
                        <div className="course-header-block_btnTitle-btn">Добавить</div>
                    </div>
                    <div className='course-header-block_subsInfoBtn'>
                    </div>
                </div>
                <div className="course-lessons-list">
                    <div className="course-lessons-list-item">
                        <div className="course-lessons-list-item-title">
                           Урок №1
                        </div>                       
                    </div>
                </div>
            </div>

        </div>
    )
}
