import React, { useEffect, useState } from 'react'
import "./personalPage.css"

export const PersonalPage = () => {
    const [image, setimage] = useState("")
    useEffect(()=>{
        fetch('https://randomfox.ca/floof/').then(async(response)=>{
            const res = await response.json()
            setimage(res.image)
        });
        
    },[])

    return (
        <div>
            <div className="course-personal-header-block">
                <div className="course-personal-header-block_btnTitle">
                    <span className='course-personal-header-block_btnTitle-title'>Личный кабинет</span>
                </div>
            </div>
            <div className="course-personal-info">
                <div className='course-personal_page'> 
                    {/* <img src="/bulka1.png" width="200px" alt="" />  */}
                    <img src={image} width="200px" alt="" /> 
                    
                </div>
                <div className="course-personal-infomaton">
                    <div className="course-personal-infomaton-human">Данные</div>
                    <div className="course-personal-infomaton-name">Имя:</div>
                    <div className="course-personal-infomaton-sirname">Фамилия:</div>
                    <div className="course-personal-infomaton-sex">Пол:</div>
                    <div className="course-personal-infomaton-age">Возраст:</div>
                </div>
            </div>
            <div className="course-personal-lessons-list">
                <div className="course-personal-lessons-list-item">
                    <div className="course-personal-lessons-list-item-title">
                        Редактировать
                    </div>
                </div>
            </div>
        </div>
    )
}