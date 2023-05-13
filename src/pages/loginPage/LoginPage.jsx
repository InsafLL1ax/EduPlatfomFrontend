import React, { useRef, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './loginPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { PAGES } from '../../constants';
import { fetchSignUp } from '../../redux/userSlice';


export const LoginPage = () => {

  const [ErorrEmail, setErrorEmail] = useState(false);
  const [ErorrPassword, setErorrPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loginRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || PAGES.PERSONAL

  const onValidateLoginInput = ()=>{
    const loginValue = loginRef.current.value;
    // eslint-disable-next-line
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!loginValue.match(mailformat)){
      setErrorEmail(true);
    }else{
      setErrorEmail(false);
    }
  }

  const onValidatePasswordInput = ()=>{
    const passwordValue = passwordRef.current.value;
    if(passwordValue.length > 7){
      setErorrPassword(false)
    }else{
      setErorrPassword(true)
    }
  }

  const onClickSignUp = async()=>{
    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;

    if(!ErorrEmail && !ErorrPassword && loginValue.length !== 0 && passwordValue.length !== 0){
      setIsLoading(true)
      dispatch(fetchSignUp({login:loginValue,password:passwordValue})).then(()=>{
        onClickMenuItem(fromPage)
        setIsLoading(false);
      })
    }
  }
  const onClickMenuItem = (page) => {
    navigate(page, { replace: true })
  }

  return (
    <div className='loginPage__wrapper'>
      <div className="loginPage__content__form__title">
        <h2 className='loginPage__title1'> ВХОД </h2>
      </div>
      <div className='loginPage__content'>
        <div className="loginPage__content__form">
          <div className='loginPage__title'> <img src="/l55.png" width="200px" alt="" /> </div>
          <div className="loginPage__content_form_logo">
            <img src="/logo1.png" alt="" width="250" />
          </div>
          <div className="loginPage__content__form__inputs">
            <div style={{display:"grid"}}>
              <input 
                className={`loginPage__content__form__inputs__email ${ErorrEmail ? "inputError" : "" }`} 
                type="email" 
                placeholder='simple@mail.ru'
                ref={loginRef}
                onBlur={onValidateLoginInput}
              />
              {ErorrEmail && <span style={{margin:0, color:"red",fontSize:"10px",paddingLeft:"10px"}}>Заполните корректно email</span>}
            </div>

            <div style={{display:"grid"}}>
              <input 
                className={`loginPage__content__form__inputs__pass ${ErorrPassword ? "inputError" : ""}` }
                type="password" 
                placeholder='password'
                ref={passwordRef}
                onBlur={onValidatePasswordInput}
              />
              {ErorrPassword && <span style={{margin:0, color:"red",fontSize:"10px",paddingLeft:"10px"}}>Пароль должен содержать больше 8 символов</span>}
            </div>

          </div>
          <div className="loginPage__content__form__btns">
            <div className="loginPage__content__form__btns__enter" onClick={() => onClickMenuItem(PAGES.REG)}>
              регистрация
            </div>
            <div className="loginPage__content__form__btns__log" onClick={onClickSignUp}>
              войти
            </div>
          </div>
        </div>
      </div>
      <Backdrop open={isLoading}><CircularProgress/></Backdrop>
    </div>
  )
}

