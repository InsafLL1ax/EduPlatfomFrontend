import React from 'react'
import './loginPage.css';
//<img src="logo1.png" alt=""width="250"/>
import { useNavigate } from 'react-router-dom';
export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className='loginPage-wrapper'>
      
      <h2 className='loginPage__title'>образовательная платформа</h2>

      <div className='loginPage__content'>
        <div className="loginPage__content__form">

          <div className="loginPage__content__form__title">
            Вход
          </div>
          <div className="loginPage__content_form_logo">
      
          </div>
          <div className="loginPage__content__form__inputs">
              <input className="loginPage__content__form__inputs__email" type="email" name="email" placeholder='simple@mail.ru'/>
              <input className="loginPage__content__form__inputs__pass" type="password" name="password" placeholder='password'  />
          </div>

          <div className="loginPage__content__form__btns">
            <div className="loginPage__content__form__btns__enter">
              войти
            </div>
            <div className="loginPage__content__form__btns__reg" onClick={()=>navigate("/regPage",{replace:true})}>
              регистрация
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
