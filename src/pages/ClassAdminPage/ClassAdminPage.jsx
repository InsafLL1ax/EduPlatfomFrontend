import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import "./classAdminPage.css"

export const ClassAdminPage = () => {
    return (
        <div className='courseWrapper'>
            <SideBar />
            <div>
                <div className="course-header-block">
                    <div className="course-header-block_btnTitle">
                        <span className='course-header-block_btnTitle-title'>Математика</span>
                    </div>
                </div>
                <div className="course-lessons-list">
                    <div className="course-lessons-list-item">
                        <div className="course-lessons-list-item-title">
                            Урок №1
                        </div>
                    </div>
                    <div className='course-header-block_subsInfo'>
                        <div className='course-header-block_subsInfo_tx1'>Текст занятия</div>
                        <div className='course-header-block_subsInfo_tx'>Материалы занятия</div>
                    </div>
                    <div className='course-header-block_subsInfoBtn'>
                        <div className='course-header-block_subsInfoBtn-btn'>PDF: Лекция о сложении</div>
                    </div>
                    <div className='course-header-block_subsInfoBtn2'>
                        <div className='course-header-block_subsInfoBtn-btn2'>MP4: Разбор задания</div>
                    </div>
                    <div className='course-header-block_subsInfoBtn3'>
                        <div className='course-header-block_subsInfoBtn-btn3'>Файл студента</div>
                    </div>
                    <div className='course-header-block_subsInfoBtn4'>
                        <div className='course-header-block_subsInfoBtn-save'>Сохранить</div>
                        <div className='course-header-block_subsInfoBtn-deleate'>Удалить</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
