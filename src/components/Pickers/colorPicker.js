import React, { useEffect, useState } from 'react'
import { validColors } from '@/constants/colors'
const ColorPicker = ({ name = [], handleClick = () => {}, checked }) => {
    const handleColorSelect = (name) => {
        handleClick(name, !checked)
    }

    return (
        <div
            className="flex overflow-hidden bg-secundary border-gray-500 h-[25px] w-[25px] border rounded-full"
            style={{ opacity: checked ? 2 : 1 }}
            onClick={() => handleColorSelect(name[0])}
        >
            {name.map((item, index) => (
                <div
                    key={index}
                    name={name}
                    title={item}
                    className={`flex w-full h-full checked:bg-transparent  cursor-pointer `}
                    style={{
                        backgroundColor: validColors[item],
                    }}
                />
            ))}
            {checked && (
                <div className="relative top-0 left-[-45%] w-[5px] h-full bg-red-500 transform rotate-45" />
            )}
        </div>
    )
}

export default ColorPicker
