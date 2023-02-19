import { Field, Form, Formik } from 'formik';
import React from 'react';
import './../../Assets/style/startPage_style.scss'

const StartPage = (props: any) => {
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
                        initialValues={{ login: '', password: '', rememberMe: false }}
                        onSubmit={(values) => { console.log(values) }}
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="container">
                                    <p className='text'>Имя пользователя</p>
                                    <Field name="login" className="login_input" />
                                    
                                    <div className='text_container'><p className='text'>Пароль</p></div>
                                    <Field name="password" className="password_input" type="password" />
                                    <div className="rememberMe_container">
                                        <Field name="rememberMe" className="rememberMe_checkbox" type="checkbox" />
                                        <p>Remember me</p>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>

        </div>
    );
};

export default StartPage;