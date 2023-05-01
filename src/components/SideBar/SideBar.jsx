import React from 'react'
import "./sideBar.css"
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constants';

export const SideBar = () => {
    const navigate = useNavigate();

    const onClickMenuItem = (page) => {
        navigate(page,{ replace: true })
    }

    return (
        <div className='sideBar_wrapper'>
            <div className="sideBar-list">
                <div className="sideBar-list-item" onClick={() => onClickMenuItem(PAGES.PERSONAL)}>
                    <div className="sideBar-list-item-logo">
                        <img src="human.png" width="60px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Персональная страница</span>
                </div>
                <div className="sideBar-list-item" onClick={() => onClickMenuItem(PAGES.ADMIN_CLASS)}>
                    <div className="sideBar-list-item-logo">
                        <img src="course.png" width="60px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Мои курсы</span>
                </div>
                <div className="sideBar-list-item" onClick={() => onClickMenuItem(PAGES.COURSES)}>
                    <div className="sideBar-list-item-logo">
                        <img src="follower.png" width="60px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Мои подписки</span>
                </div>
                <div className="sideBar-list-item">
                    <div className="sideBar-list-item-logo">
                        <img src="books.png" width="60px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Все курсы</span>
                </div>
                <div className="sideBar-list2"></div>
                <div className="sideBar-list-item">
                    <div className="sideBar-list-item-logo2">
                        <img src="vk.png" width="19px" alt="" />
                    </div>
                    <div className="sideBar-list-item">
                        <div className="sideBar-list-item-logo2">
                            <img src="tg.png" width="20px" alt="" />
                        </div>
                        <div className="sideBar-list-item">
                            <div className="sideBar-list-item-logo2">
                                <img src="insta.png" width="20px" alt="" />
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
