import React from 'react'
import "./coursesPages.css"
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constants'

export const CoursesPages = () => {
    const navigate = useNavigate();
    const onClickMenuItem = (page) => {
        navigate(page, { replace: true })
    }
    return (
        <div>
            <div className='courses-header-block_subsInfoBtn' onClick={() => onClickMenuItem(PAGES.COURSE)}>
                <div className='courses-header-block_subsInfoBtn-btn'>Добавить курс</div>
            </div>
            <div className="all-header-block">
                <h2 className='all-header-block-title'>Мои курсы</h2>
            </div>
            <div className="courses-lessons-list">

                <div className="courses-lessons-list-item">
                    <div className="courses-lessons-list-item-title">
                        Математика</div>
                    <div className="courses-lessons-list-item-btn" onClick={() => navigate(PAGES.COURSE, { replace: true })}>
                        Перейти </div>
                    <div className="courses-lessons-list-item-btn2">
                        Редактировать </div>
                </div>
                <div className="courses-lessons-list-item2">
                    <div className="courses-lessons-list-item-title2">
                        История </div>
                    <div className="courses-lessons-list-item2-btn">
                        Перейти </div>
                    <div className="courses-lessons-list-item2-btn2">
                        Редактировать </div>
                </div>
            </div>
        </div>
    )
}