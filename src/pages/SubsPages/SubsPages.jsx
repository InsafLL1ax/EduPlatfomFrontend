import React from 'react'
import "./subsPages.css"
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constants'

export const SubsPages = () => {
    const navigate = useNavigate();
    const onClickMenuItem = (page) => {
        navigate(page, { replace: true })
    }
    return (
        <div>
            <div className='subs-header-block_subsInfoBtn'>
                <div className='subs-header-block_subsInfoBtn-btn'>Поиск курсов</div>
            </div>
            <div className="all-header-block">
                <h2 className='all-header-block-title'>Мои подписки</h2>
            </div>
            <div className="subs-lessons-list">
                <div className="subs-lessons-list-item">
                    <div className="subs-lessons-list-item-title">
                        Математика </div>
                    <div className="subs-lessons-list-item-btn" onClick={() => onClickMenuItem(PAGES.COURSE_USER)}>
                        Посмотреть </div>
                    <div className="subs-lessons-list-item-btn2">
                        Отписаться </div>
                    <div className="subs-lessons-list-item-autor">
                        Автор: Курбанов Б.А. </div>
                </div>
                <div className="subs-lessons-list-item2">
                    <div className="subs-lessons-list-item-title2">
                        История </div>
                    <div className="subs-lessons-list-item2-btn">
                        Посмотреть </div>
                    <div className="subs-lessons-list-item2-btn2">
                        Отписаться </div>
                    <div className="subs-lessons-list-item2-autor">
                        Автор: Зиннуров Б.P. </div>
                </div>
            </div>
        </div>
    )
}