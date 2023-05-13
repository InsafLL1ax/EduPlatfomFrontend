import React from 'react'
import "./classUserPage.css"

export const ClassUserPage = () => {
    return (
        <div>
            <div className="class-user-header-block">
                <div className="class-user-header-block_btnTitle">
                    <span className='class-user-header-block_btnTitle-title'>Математика</span>
                </div>
            </div>
            <div className="class-user-lessons-list">
                <div className="class-user-lessons-list-item">
                    <div className="class-user-lessons-list-item-title">
                        Урок №1
                    </div>
                </div>
                <div className='class-user-header-block_subsInfo'>
                    <div className='class-user-header-block_subsInfo_tx1'>Текст занятия</div>
                    <div className='class-user-header-block_subsInfo_tx'>Материалы занятия</div>
                </div>
                <div className='class-user-header-block_subsInfoBtn'>
                    <div className='class-user-header-block_subsInfoBtn-btn'>PDF: Лекция о сложении</div>
                </div>
                <div className='class-user-header-block_subsInfoBtn2'>
                    <div className='class-user-header-block_subsInfoBtn-btn2'>MP4: Разбор задания</div>
                </div>
                <div className='class-user-header-block_subsInfoBtn3'>
                    <div className='class-user-header-block_subsInfoBtn-btn3'>Файл студента</div>
                </div>
                <div className='class-user-header-block_subsInfoBtn4'>
                    <div className='class-user-header-block_subsInfoBtn-ready'>Изучено</div>
                </div>
            </div>
        </div>
    )
}