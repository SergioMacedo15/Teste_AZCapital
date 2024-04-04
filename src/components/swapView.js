import React, { useState } from 'react'
import { ChevronDown } from 'feather-icons-react/build/IconComponents'

const SwapView = ({ title, children }) => {
    const [swap, setSwap] = useState(false)
    const handleClickSwapView = () => {
        setSwap(!swap)
    }
    return (
        <div className="flex flex-col p-3  border-b border-solid border-gray-300">
            <div>
                <div
                    onClick={handleClickSwapView}
                    className="py-3 cursor-pointer  flex items-center justify-between capitalize"
                >
                    {title}
                    <ChevronDown
                        className={`${swap && `rotate-180`} duration-500`}
                    />
                </div>
            </div>
            <div>{swap && children}</div>
        </div>
    )
}

export default SwapView
