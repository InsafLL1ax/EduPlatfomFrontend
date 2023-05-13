import React from 'react'
import "./sideBar.css"
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constants';

export const SideBar = () => {
    const navigate = useNavigate();

    const onClickMenuItem = (page) => {
        navigate(page, { replace: true })
    }

    return (
        <div className='sideBar_wrapper'>
            <div className="sideBar-list-general">
                <div className="sideBar-list-item-general"></div>
                <div className="sideBar-list-item-logo-general">
                    <img src="/l55.png" width="100px" alt="" />
                </div>
            </div>
            <div className="sideBar-list">
                <div className="sideBar-list-item">
                </div>
                <div className="sideBar-list-item" onClick={() => onClickMenuItem(PAGES.PERSONAL)}>
                    <div className="sideBar-list-item-logo">
                        <img src="/l1.png" width="50px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Персональная страница</span>
                </div>
                <div className="sideBar-list-item" onClick={() => onClickMenuItem(PAGES.COURSES)}>
                    <div className="sideBar-list-item-logo">
                        <img src="/l2.png" width="50px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Мои курсы</span>
                </div>
                <div className="sideBar-list-item" onClick={() => onClickMenuItem(PAGES.SUBS)}>
                    <div className="sideBar-list-item-logo">
                        <img src="/l3.png" width="50px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Мои подписки</span>
                </div>
                <div className="sideBar-list-item" onClick={() => onClickMenuItem(PAGES.LIBRARY)}>
                    <div className="sideBar-list-item-logo">
                        <img src="/l4.png" width="50px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Все курсы</span>
                </div>
                <div className="sideBar-list2"></div>
                <div className="sideBar-list-item2">
                    <div className="sideBar-list-item-logo2">
                        <img src="/vk.png" width="18px" alt="" />
                    </div>
                    <div className="sideBar-list-item-logo2">
                        <img src="/tg.png" width="20px" alt="" />
                    </div>
                    <div className="sideBar-list-item-logo2">
                        <img src="/insta.png" width="20px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
