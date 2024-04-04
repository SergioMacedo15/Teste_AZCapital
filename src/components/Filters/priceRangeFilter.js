import React, { useState } from 'react'
import InputValueCustom from '../Inputs/inputValueCustom'
import SwapView from '../swapView'

const PriceRangeFilter = ({ type, title, handleFilter }) => {
    const [rangeValue, setRangeValue] = useState({
        max: null,
        min: null,
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(name == 'min' ? null : value)
        const newrange = {
            ...rangeValue,
            [name]: value,
            max: name == 'min' ? null : value,
        }

        setRangeValue(newrange)
    }

    const handleSubmit = () => {
        handleFilter(type, rangeValue)
    }

    return (
        <SwapView title={title}>
            <div className="flex flex-col itens-end gap-2">
                <div className="flex text-sm gap-1 ">
                    <InputValueCustom
                        min={0}
                        name="min"
                        max={9999}
                        placeholder="Valor min."
                        value={rangeValue.min}
                        onChange={handleChange}
                        className="flex col-span-1 w-full focus:outline-none"
                    />

                    <InputValueCustom
                        name="max"
                        min={rangeValue.min}
                        max={9999}
                        placeholder="Valor max."
                        value={rangeValue.max}
                        onChange={handleChange}
                        className="flex col-span-1 w-full focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-black text-white text-sm px-4 py-1 rounded-md"
                >
                    Aplicar
                </button>
            </div>
        </SwapView>
    )
}

export default PriceRangeFilter
