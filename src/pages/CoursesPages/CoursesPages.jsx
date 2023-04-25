import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import "./coursesPages.css"

export const CoursesPages = () => {
    return (
        <div className='courseWrapper'>
            <SideBar />
            <div>
                <div className="course-header-block">
                    <div className='course-header-block_subsInfoBtn'>
                        <div className='course-header-block_subsInfoBtn-btn'>Добавить курс</div>
                    </div>
                </div>
                <div className="course-lessons-list">
                    <div className="course-lessons-list-item">
                        <div className="course-lessons-list-item-title">
                            Математика
                        </div>
                        <div className="course-lessons-list-item-btn">
                            Посмотреть
                        </div>
                        <div className="course-lessons-list-item-btn2">
                            Редактировать
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}