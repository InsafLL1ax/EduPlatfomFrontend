import React from 'react'
import "./sideBar.css"

export const SideBar = () => {
    return (
        <div className='sideBar_wrapper'>
            <div className="sideBar-list">
                <div className="sideBar-list-item">
                    <div className="sideBar-list-item-logo">
                        <img src="human.png" width="100px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Персональная страница</span>
                </div>
                <div className="sideBar-list-item">
                    <div className="sideBar-list-item-logo">
                    <img src="course.png" width="100px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Мои курсы</span>
                </div>
                <div className="sideBar-list-item">
                    <div className="sideBar-list-item-logo">
                    <img src="follower.png" width="100px" alt="" />
                    </div>
                    <span className='sideBar-list-item-title'>Мои подписки</span>
                </div>
                <div className="sideBar-list-item">
                     <div className="sideBar-list-item-logo"> 
                    <img src="books.png" width="100px" alt="" />
                     </div>
                    <span className='sideBar-list-item-title'>Все курсы</span>
                </div>
            </div>
        </div>
    )
}
