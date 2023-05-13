import React from 'react'
import "./followerPageMan.css"

export const FollowerPageMan = () => {

    return (
        <div>
            <div>
                <div className="followerlPageMan-header-block">
                    <div className="followerlPageMan-header-block_btnTitle">
                        <span className='followerlPageMan-header-block_btnTitle-title'>Подписчик</span>
                    </div>
                </div>
                <div className="followerlPageMan-info">
                    <div className='followerlPageMan_page'> <img src="/bulka-round.png" width="200px" alt="" /> </div>
                    <div className="followerlPageMan-infomaton">
                        <div className="followerlPageMan-infomaton-human">Данные</div>
                        <div className="followerlPageMan-infomaton-name">Имя:</div>
                        <div className="followerlPageMan-infomaton-sirname">Фамилия:</div>
                        <div className="followerlPageMan-infomaton-sex">Пол:</div>
                        <div className="followerlPageMan-infomaton-age">Возраст:</div>
                    </div>
                </div> 
            </div>
            <div className="followerlPageMan-lessons-list">
                <div className="followerlPageMan-lessons-list-item">
                </div>
            </div>
        </div>
    )
}