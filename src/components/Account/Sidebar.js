import React from 'react';
import './account.css'

import SideLogo from '../../assets/Sidelogo.png'
import Person from '../../assets/Person.png'
import Home from '../../assets/Home.png'
import Info from '../../assets/Info-Square.png'
import User from '../../assets/User.png'

const Sidebar = () => {
    return (
        <div className='sideBar py-[36px] bg-[#E1E5F1] h-screen	flex flex-col items-center w-[156px]'>
            <div className='bar__top mb-[180px]'>
                <img className='px-[45px] mb-[66px]' src={SideLogo} alt="logo" />
                <img className='px-[45px] cursor-pointer' src={Person} alt="image" />
            </div>
            <div className='bar__bottom'>
                <div className='img-wrapper'><img className='px-[45px] mb-[62px] cursor-pointer' src={Home} alt="image" /></div>
                <div className='img-wrapper'><img className='px-[45px] mb-[62px] cursor-pointer' src={Info} alt="image" /></div>
                <div className='img-wrapper'><img className='px-[45px] cursor-pointer' src={User} alt="image" /></div>
                {/* <p>asdf</p> */}
            </div>
        </div>
    );
};

export default Sidebar;