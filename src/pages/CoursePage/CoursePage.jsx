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
                        <span className='course-header-block_subsInfoBtn-subs'>Подписчики: 97</span>
                        <div className='course-header-block_subsInfoBtn-btn'>Посмотреть</div>
                    </div>
                </div>
                <div className="course-lessons-list">
                    <div className="course-lessons-list-item">
                        <div className="course-lessons-list-item-title">
                            Занятие №1
                        </div>
                        <div className="course-lessons-list-item-btn">
                            Редактировать
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
