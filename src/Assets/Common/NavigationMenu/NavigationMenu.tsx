import React from 'react';
import '../../style/NavigationMenu_style.scss'
import { VscSignOut } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";


const NavigationMenu = () => {
    return (
        <div className="wrapper_nav">
            <div className="nav-items">
                <div className="icon-block"><AiOutlineUser className="icon"/><p>Профиль</p></div>
                <div className="icon-block"><AiOutlineUser className="icon"/><p>Профиль</p></div>
                <div className="icon-block"><AiOutlineUser className="icon"/><p>Профиль</p></div>
                <div className="icon-block sign-out-block"><VscSignOut className="sign-out icon"/><p>Выход</p></div>
            </div>
        </div>
    );
};

export default NavigationMenu;