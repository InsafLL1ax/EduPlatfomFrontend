import React from 'react'
import "./courseUserPage.css"
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constants';

export const CourseUserPage = () => {
    const navigate = useNavigate();

    const onClickMenuItem = (page) => {
        navigate(page, { replace: true })
    }
    return (
        <div>
            <div className="course-user-header-block">
                <div className="course-user-header-block_btnTitle">
                    <span className='course-user-header-block_btnTitle-title'>Математика</span>
                    <div className='course-user-header-block_btnTitle-title2'>Автор: Курбанов Б.А. </div>
                </div>
                <div className='course-user-header-block_subsInfoBtn'>
                </div>
            </div>
            <div className="course-user-lessons-list">
                <div className="course-user-lessons-list-item">
                    <div className="course-user-lessons-list-item-title">
                        Занятие №1
                    </div>
                    <div className="course-user-lessons-list-item-btn" onClick={() => onClickMenuItem(PAGES.USER_CLASS)}>
                        Перейти
                    </div>
                </div>
                <div className="course-user-lessons-list-item2">
                    <div className="course-user-lessons-list-item-title2">
                        Занятие №2
                    </div>
                    <div className="course-user-lessons-list-item-btn2">
                        Перейти
                    </div>
                </div>
            </div>
        </div>
    )
}
