import React from "react"

const TableBtn = ({ children ,setActive,active}) =>{
    return(
        <>
            <button onClick={()=>setActive(!active)} className="bg-[#F0F4FF] h-[54px] w-[124px] text-[14px] font-[500] border-1 border-[#243c5a] rounded-[6px]">
                {children}
            </button>
        </>
    )
}

export default TableBtn;