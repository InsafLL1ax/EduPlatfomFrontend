import React from 'react'
import "./coursePage.css"
import { PAGES } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const CoursePage = () => {
    const navigate = useNavigate();

    const onClickMenuItem = (page) => {
        navigate(page, { replace: true })
    }

    return (
        <div>
            <div className="course-header-block">
                <div className="course-header-block_btnTitle">
                    <span className='course-header-block_btnTitle-title'>Математика</span>
                    <span className='course-header-block_btnTitle-follower'>Подписчики:99</span>
                    <div className="course-header-block_btnTitle-btn-look" onClick={() => onClickMenuItem(PAGES.FOLLOWER)}>
                        Посмотреть</div>
                    <div className="course-header-block_btnTitle-btn">
                        Добавить
                    </div>
                </div>
                <div className='course-header-block_subsInfoBtn'>
                </div>
            </div>
            <div className="course-lessons-list">
                <div className="course-lessons-list-item">
                    <div className="course-lessons-list-item-title">
                        Занятие №1
                    </div>
                    <div className="course-lessons-list-item-btn" onClick={() => onClickMenuItem(PAGES.ADMIN_CLASS)}>
                        Редактировать
                    </div>
                </div>
                <div className="course-lessons-list-item2">
                    <div className="course-lessons-list-item-title2">
                        Занятие №2
                    </div>
                    <div className="course-lessons-list-item-btn2">
                        Редактировать
                    </div>
                </div>
            </div>
        </div>
    )
}
