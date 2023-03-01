import React from 'react';
import BlueButton from '../../utils/BlueButton';

const Manage = () => {
    return (
        <div className='Mange__User px-[57px] py-[61px]'>
            <div className='top__btn'>
                <BlueButton>Test Filter</BlueButton>
                <button className='gray__btn'>Show Deleted</button>
            </div>
        </div>
    );
};

export default Manage;