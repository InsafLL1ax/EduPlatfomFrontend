import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import "./coursesPages.css"
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constants'

export const CoursesPages = () => {
    const navigate = useNavigate();
    
    return (
        <div className='courseWrapper'>
            <SideBar />
            <div>
                <div className="courses-header-block">
                    <div className='courses-header-block_subsInfoBtn'>
                        <div className='course-header-block_subsInfoBtn-btn'>Добавить курс</div>
                    </div>
                </div>
                <div className="courses-lessons-list">
                    <div className="courses-lessons-list-item">
                        <div className="courses-lessons-list-item-title">
                            Математика
                        </div>
                        <div className="courses-lessons-list-item-btn" onClick={()=> navigate(PAGES.COURSE,{ replace: true })}>
                            Посмотреть
                        </div>
                        <div className="courses-lessons-list-item-btn2">
                            Редактировать
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}