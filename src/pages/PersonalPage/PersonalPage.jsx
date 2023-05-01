import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import "./personalPage.css"

export const PersonalPage = () => {
    return (
        <div className='courseWrapper'>
            <SideBar />
            <div>
                <div className="course-personal-header-block">
                    <div className="course-personal-header-block_btnTitle">
                        <span className='course-personal-header-block_btnTitle-title'>Имя пользователя</span>
                    </div>
                </div>
                <div className="course-personal-lessons-list">
                    <div className="course-personal-lessons-list-item">
                        <div className="course-personal-lessons-list-item-title">
                            Редактировать
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}