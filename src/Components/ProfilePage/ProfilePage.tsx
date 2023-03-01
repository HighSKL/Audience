import React from 'react';
import NavigationMenu from '../../Assets/Common/NavigationMenu/NavigationMenu';
import '../../Assets/style/ProfilePage_style.scss'

const ProfilePage = () => {
    return (
        <>
        <NavigationMenu />
        <div className="profile_wrapper">
            <p className='page-title'>Профиль</p>
        </div>
        </>
        
    );
};

export default ProfilePage;