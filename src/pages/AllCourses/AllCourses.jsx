import React from 'react'
import "./allCourses.css"
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constants'

export const AllCourses = () => {
    const navigate = useNavigate();
    const onClickMenuItem = (page) => {
        navigate(page, { replace: true })
    }
    return (
        <div>
            <div className="all-content-form-inputs">
                <input className="all-content-form-input-serach" type="search" name="Найти" placeholder='Найти курс...' />
                <div className='all-header-block_subsInfoBtn'>
                    <div className='all-header-block_subsInfoBtn-btn'>Поиск</div>
                </div>
            </div>
            <div className="all-header-block">
                <h2 className='all-header-block-title'>Все курсы</h2> 
            </div>
            <div className="all-lessons-list">
                <div className="all-lessons-list-item">
                    <div className="all-lessons-list-item-title">
                        Математика </div>
                    <div className="all-lessons-list-item-btn" onClick={() => onClickMenuItem(PAGES.COURSE_USER)}>
                        Посмотреть </div>
                    <div className="all-lessons-list-item-btn2">
                        Отписаться </div>
                    <div className="all-lessons-list-item-autor">
                        Автор: Курбанов Б.А. </div>
                </div>
                <div className="all-lessons-list-item2">
                    <div className="all-lessons-list-item-title2">
                        История </div>
                    <div className="all-lessons-list-item2-btn">
                        Посмотреть </div>
                    <div className="all-lessons-list-item2-btn2">
                        Отписаться </div>
                    <div className="all-lessons-list-item2-autor">
                        Автор: Зиннуров Б.P. </div>
                </div>
            </div>
        </div>
    )
}