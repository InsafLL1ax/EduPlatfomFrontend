import React from 'react'
import { useNavigate } from 'react-router-dom'
import './regPage.css';
export const RegPage = () => {

  const navigate = useNavigate();

  return (
    <div className='Reg__wrapper'>
      <div className="Reg__content__form__title">
        <h2 className='reg__title1'>РЕГИСТРАЦИЯ</h2>
      </div>
      <div className='Reg__content'>
        <div className="Reg__content__form">
          <div className='Reg__title'> <img src="/l55.png" width="200px" alt="" /> </div>
          <div className="Reg__content_form_logo">
            <img src="/logo1.png" alt="" width="250" />
          </div>
          <div className="Reg__content__form__inputs">
            <input className="Reg__content__form__inputs__email" type="email" name="email" placeholder='simple@mail.ru' />
            <input className="Reg__content__form__inputs__pass" type="password" name="password" placeholder='password' />
            <input className="Reg__content__form__inputs__pass2" type="password" name="password" placeholder='repeat password' />
          </div>
          <div className="Reg__content__form__btns">
            <div className="Reg__content__form__btns__enter" onClick={() => navigate("/", { replace: true })}>
              сохранить
            </div>
            <div className="Reg__content__form__btns__reg">
              вход
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
