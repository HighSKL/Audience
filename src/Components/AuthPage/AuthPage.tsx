import axios from 'axios';
import { Field, Formik } from 'formik';
import React, { useEffect } from 'react';
import './../../Assets/style/AuthPage_style.scss'
import { useNavigate } from "react-router-dom";
import { AppStateType } from '../../Redux/store';
import { connect } from 'react-redux';
import { setUser, authUserThunk } from '../../Redux/reducers/authReducer';
import { UserDataType } from '../../Types/types';
import Cookies from 'js-cookie';
const AuthPage = (props: any) => {
    
    const navigation = useNavigate(); 

    useEffect(()=>{
        console.log(Cookies.get('authUser'))
        if (Cookies.get('authUser') != undefined){
            let cookieValue = Cookies.get('authUser')?.toString()
            let userData = cookieValue != undefined ? JSON.parse(cookieValue) : null
            setUser(userData);
            navigation('/profile')
        }
    }, [])

    const linesRender: () => JSX.Element = (title: string = "AUDIENCE") => (
        <>
            <div className="runing_line rl_left"><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p></div>
            <div className="runing_line rl_right"><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p></div>
            <div className="runing_line rl_left"><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p></div>
            <div className="runing_line rl_right"><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p><p>{title}</p></div>
        </>
    )
    return (
        <div className="wrapper">
            <div className="linesContainer">
                {linesRender()}
                {linesRender()}
                {linesRender()}
                {linesRender()}
                {linesRender()}
                {linesRender()}
                {linesRender()}
            </div>
            <div className="authBlock">
                <h1 className="header_text">AUDIENCE</h1>
                <div className="form_block">
                    <Formik
                        initialValues={{ login: '', password: ''}}
                        onSubmit={(values) => { 
                            props.authUser(values.login, values.password).then(()=>{
                                navigation("/profile");
                            })
                        }}
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="container">
                                    <p className='text'>Имя пользователя</p>
                                    <Field name="login" className="login_input" />
                                    
                                    <div className='text_container'><p className='text'>Пароль</p></div>
                                    <Field name="password" className="password_input" type="password" />
                                    <button>Войти</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>

        </div>
    );
};

let mapStateToProps = (state: AppStateType) => ({
    authPage: state.auth
})

export default connect(mapStateToProps, { setUser, authUser: authUserThunk })(AuthPage)
