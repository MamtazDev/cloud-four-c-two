import React from 'react';
import ProjectButton from '../../utils/ProjectButton';
import ProjectButton2 from '../../utils/ProjectButton2';
import ProjectButton3 from '../../utils/ProjectButton3';

const StartSession = () => {
    return (
        <div className='start__session h-full w-full flex justify-center items-center'>
            <div className='session__inner  border-[1px] rounded-[8px] bordered-[#F8FAFF] shadow-black px-[28px] py-[20px] flex flex-col items-center w-[593px]'>
                <ProjectButton>Start Session</ProjectButton>
                <ProjectButton2>Session Name</ProjectButton2>
                <ProjectButton2>Session Description</ProjectButton2>

                <div className='cencelation  flex justify-between w-[253px] mt-[20px]'>
                    <ProjectButton3>Cancel</ProjectButton3>
                    <ProjectButton3>Accept</ProjectButton3>
                </div>
            </div>
        </div>
    );
};

export default StartSession;