import React from 'react'
import "./followerPage.css"
import { PAGES } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const FollowerPage = () => {
    const navigate = useNavigate();

    const onClickMenuItem = (page) => {
        navigate(page, { replace: true })
    }

    return (
        <div>
            <div className="follower-header-block">
                <div className="follower-header-block_btnTitle">
                    <span className='follower-header-block_btnTitle-title'>Математика</span>
                </div>
                <div className='follower-header-block_subsInfoBtn'>
                </div>
            </div>
            <div className="follower-lessons-list">
                <div className="follower-lessons-list-item">
                    <div className="follower-lessons-item-logo">
                        <img src="/bulka-round.png" width="60px" alt="" />
                    </div>
                    <div className="follower-lessons-list-item-text1">Булат Зиннуров</div>
                    <div className="follower-lessons-list-item-btn" onClick={() => onClickMenuItem(PAGES.FOLLOWERMAN)}>
                        Перейти</div>
                </div>
                <div className="follower-lessons-list-item2">
                    <div className="follower-lessons-item-logo">
                        <img src="/bulka-round.png" width="60px" alt="" />
                    </div>
                    <div className="follower-lessons-list-item-text2">Булат Зиннуров</div>
                    <div className="follower-lessons-list-item-btn2" onClick={() => onClickMenuItem(PAGES.FOLLOWERMAN)}>
                        Перейти</div>
                </div>
                <div className="follower-lessons-list-item3">
                    <div className="follower-lessons-item-logo">
                        <img src="/bulka-round.png" width="60px" alt="" />
                    </div>
                    <div className="follower-lessons-list-item-text3">Булат Зиннуров</div>
                    <div className="follower-lessons-list-item-btn3" onClick={() => onClickMenuItem(PAGES.FOLLOWERMAN)}>
                        Перейти </div>
                </div>
            </div>
        </div>
    )
}