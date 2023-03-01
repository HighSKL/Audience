import React from 'react';
import '../../style/NavigationMenu_style.scss'
import { VscSignOut } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";


const NavigationMenu = () => {
    return (
        <div className="wrapper_nav">
            <div className="nav-items">
                <div className="icon-block"><AiOutlineUser className="icon"/><p>Профиль</p></div>
                <div className="icon-block"><AiOutlineTeam className="icon"/><p>Команда</p></div>
                <div className="icon-block"><AiOutlineCalendar className="icon"/><p>Бронь</p></div>
                <div className="icon-block sign-out-block"><VscSignOut className="sign-out icon"/><p>Выход</p></div>
            </div>
        </div>
    );
};

export default NavigationMenu;