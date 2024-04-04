import React, { useState } from 'react'
import Image from 'next/image'

const DetailShirtListItem = ({ image = null, title, decription }) => {
    return (
        <div class="flex bg-white rounded-lg  overflow-hidden ">
            <div className="flex flex-col">
                <div class="md:shrink-0">
                    <Image
                        class="h-48 w-full object-cover "
                        src={image}
                        alt="Modern building architecture"
                    />
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-principal-500 font-semibold">
                        {title}
                    </div>
                    <p class="mt-2 text-slate-500">{decription}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailShirtListItem
