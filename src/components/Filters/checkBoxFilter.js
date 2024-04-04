import React, { useEffect, useState } from 'react'

import { ChevronDown } from 'feather-icons-react/build/IconComponents'
import SwapView from '../swapView'

const CheckBoxFilter = ({ title, type, options = [], handleFilter }) => {
    const [selected, setSelected] = useState({})

    const handleSelectBox = (event) => {
        const { name, checked } = event.target
        const newArray = { ...selected }
        if (checked) {
            newArray[name] = checked
        } else {
            delete newArray[name]
        }
        setSelected(newArray)
        handleFilter(type, Object.keys(newArray))
    }

    return (
        <SwapView title={title}>
            {options.map((option, index) => (
                <div
                    key={index}
                    className="flex text-xs items-center gap-2 py-1 "
                >
                    <input
                        type="checkbox"
                        id={option}
                        name={option}
                        checked={selected[option]}
                        onClick={handleSelectBox}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded cursor-pointer"
                    />
                    <label for={option}>{option}</label>

                    <div>{option.name}</div>
                </div>
            ))}
        </SwapView>
    )
}

export default CheckBoxFilter
