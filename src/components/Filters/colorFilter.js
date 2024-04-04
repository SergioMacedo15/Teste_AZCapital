import React, { useEffect, useState } from 'react'
import ColorPicker from '../Pickers/colorPicker'
import SwapView from '../swapView'

const ColorFilter = ({ title, colors = {}, handleFilter, type }) => {
    const [keys, setKeys] = useState([])
    const [selected, setSelected] = useState({})

    useEffect(() => {
        setKeys(Object.keys(colors))
    }, [])

    const handleColorSelect = (name, status) => {
        const newArray = { ...selected }
        if (status) {
            newArray[name] = status
        } else {
            delete newArray[name]
        }
        setSelected(newArray)
        handleFilter(type, Object.keys(newArray))
    }

    return (
        <SwapView title={title}>
            <div className="flex gap-2 flex-wrap">
                {keys.map((name, key) => (
                    <ColorPicker
                        key={key}
                        handleClick={handleColorSelect}
                        name={[name]}
                        checked={selected[name]}
                    />
                ))}
            </div>
        </SwapView>
    )
}

export default ColorFilter
