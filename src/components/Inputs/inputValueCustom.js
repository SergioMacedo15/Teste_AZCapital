import React from 'react'

const InputValueCustom = ({
    value = null,
    min = null,
    max,
    name,
    onChange,
    className,
    placeholder,
}) => {
    return (
        <div className="flex gap-2 w-full itens-center justify-center conte border border-gray-300 rounded-md px-2 py-1">
            <p className="flex itens-center justify-center">R$</p>
            <input
                type="number"
                name={name}
                min={min}
                placeholder={placeholder}
                value={value}
                max={max}
                onChange={onChange}
                className={className}
            />
        </div>
    )
}

export default InputValueCustom
