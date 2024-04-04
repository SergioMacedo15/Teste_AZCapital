import React, { useState } from 'react'
import Image from 'next/image'
import SizePicker from './Pickers/sizePicker'
import ColorPicker from './Pickers/colorPicker'
import {
    ChevronLeft,
    ChevronRight,
} from 'feather-icons-react/build/IconComponents'
import { ruleSlideChange } from '@/utils/slideImage'

const tamanhosDeRoupas = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG']

const ShirtListComponent = ({
    image = null,
    name = '',
    price = 0,
    sizes = [...tamanhosDeRoupas],
    colors = [],
    onClick,
    className,
}) => {
    const [imageSelected, setImageSelected] = useState(0)

    const handleChangeImage = (value) => {
        setImageSelected(ruleSlideChange(imageSelected, value, image))
    }

    const formatPrice = (value) => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })
    }

    return (
        <div
            className={`flex flex-col cur sm:w-full md:w-max-[300px] h-[300px] items-start gap-[10px] p-[10px] relative bg-banner rounded-[5px] ${className}`}
        >
            {image && (
                <div className="flex h-full overflow-hidden w-full items-center justify-around  bg-principal rounded-xl">
                    <div
                        className=" w-[24px] h-[24px] text-black hover:opacity-0.8 cursor-pointer"
                        onClick={() => handleChangeImage(-1)}
                    >
                        <ChevronLeft />
                    </div>

                    <Image
                        className=" flex h-full object-contain w-full max-w-[70%] "
                        alt="Image"
                        src={image[imageSelected]}
                    />
                    <div
                        className=" w-[24px] h-[24px] text-black hover:opacity-0.8 cursor-pointer"
                        onClick={() => handleChangeImage(1)}
                    >
                        <ChevronRight />
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-[10px] items-start  px-0 py-[10px]   w-full ">
                <div
                    onClick={onClick}
                    className="hover:underline cursor-pointer  font-bold text-black text-[16px] "
                >
                    {name}
                </div>
                <div className="relative self-stretch font-medium text-black text-[12px] ">
                    {formatPrice(price)}
                </div>
                <div className="flex items-start gap-[5px]  w-full ">
                    {sizes.map((size, index) => (
                        <SizePicker key={index} text={size} />
                    ))}
                </div>
                <div className="flex items-center gap-[5px]  py-0 relative self-stretch w-full ">
                    {colors.map((name, index) => (
                        <ColorPicker
                            key={index}
                            name={typeof name == 'string' ? [name] : name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShirtListComponent
