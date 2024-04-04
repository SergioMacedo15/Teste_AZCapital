import React from 'react'

const SizePicker = ({ text }) => {
    return (
        <div className=" w-[25px] h-[25px] bg-secundary rounded-[100px] overflow-hidden">
            <div className="flex items-center justify-center w-full h-full font-normal text-secundary text-[9px] ">
                {text}
            </div>
        </div>
    )
}

export default SizePicker
