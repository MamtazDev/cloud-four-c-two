import React from 'react'

const ProjectButton = ({children}) =>{
    return(
        <>
            <button className='commissioner w-full bg-[#F1F6FF] text-[20px] leading-[38px] font-[500] rounded-[12px] mb-[29px] p-[8px] '>
                {children}
            </button>
        </>
    )
}

export default ProjectButton; 