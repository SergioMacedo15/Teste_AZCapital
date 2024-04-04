import ShirtListComponent from '@/components/shirtListItem'
import { useRouter } from 'next/router'
import { slideShirtsImage } from '@/mock/products'
import React, { useEffect, useState } from 'react'
import {
    ChevronLeft,
    ChevronRight,
} from 'feather-icons-react/build/IconComponents'
import { ruleSlideChange } from '@/utils/slideImage'
import Image from 'next/image'
import { detailsShirt } from '@/mock/products'
import DetailShirtListItem from '@/components/detailsShirtListItem'
import imageDetail from '@/assets/algodao.png'

const index = () => {
    const [product, setProduct] = useState(null)
    const [imageSelected, setImageSelected] = useState(0)
    const router = useRouter()
    const { data } = router.query

    const handleChangeImage = (value) => {
        console.log()

        setImageSelected(
            ruleSlideChange(imageSelected, value, slideShirtsImage)
        )
    }

    const handleComeBack = () => {
        router.back()
    }
    useEffect(() => {
        if (data) {
            const parsedData = JSON.parse(data)
            setProduct(parsedData)
        }
    }, [data])

    return (
        product && (
            <main>
                <div className="flex flex-col gap-[20px] py-[50px] px-[100px]">
                    <div className="flex flex-row gap-3">
                        <p
                            onClick={() => handleComeBack()}
                            className="cursor-pointer  text-secundary"
                        >
                            Camisetas
                        </p>
                        <p>/</p>
                        <p>{product.name}</p>
                    </div>
                    <div className="grid md:h-[350px] lg:h-[350px] grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-10">
                        <div className="flex h-full overflow-hidden w-full items-center justify-around  bg-principal rounded-xl col-span-2">
                            <div
                                className=" w-[24px] h-[24px] text-black hover:opacity-0.8 cursor-pointer"
                                onClick={() => handleChangeImage(-1)}
                            >
                                <ChevronLeft />
                            </div>

                            <Image
                                className=" flex h-full object-contain w-full max-w-[70%] "
                                alt="Image"
                                src={slideShirtsImage[imageSelected]}
                            />
                            <div
                                className=" w-[24px] h-[24px] text-black hover:opacity-0.8 cursor-pointer"
                                onClick={() => handleChangeImage(1)}
                            >
                                <ChevronRight />
                            </div>
                        </div>
                        <div>
                            <ShirtListComponent
                                key={index}
                                name={product.name}
                                price={product.price}
                                colors={product.colors}
                                sizes={product.sizes}
                            />
                        </div>
                    </div>
                    <div className="flex justify-start text-principal text-sm p-2 itens-center border-b border-line-secondary">
                        Mais Detalhess
                    </div>
                    <div
                        className={`grid px-4 gap-[10px] p-5  w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden `}
                    >
                        {detailsShirt.map((item, index) => (
                            <DetailShirtListItem
                                image={imageDetail}
                                title={item.title}
                                decription={item.description}
                            />
                        ))}
                    </div>
                </div>
            </main>
        )
    )
}

export default index

//  <main className={`w-full overflow-hidden `}>
//               <section
//                   className={`flex flex-col px-20 gap-[10px] p-5  w-full overflow-hidden `}
//               >
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
//                       <div className="flex h-full overflow-hidden w-full items-center justify-between bg-principal rounded-xl">
//                           <div
//                               className=" w-[24px] h-[24px] text-black hover:opacity-0.8 cursor-pointer"
//                               onClick={() => handleChangeImage(-1)}
//                           >
//                               <ChevronLeft />
//                           </div>

//                           <Image
//                               className=" flex h-full object-contain w-full max-w-[70%] "
//                               alt="Image"
//                               src={slideShirtsImage[imageSelected]}
//                           />
//                           <div
//                               className=" w-[24px] h-[24px] text-black hover:opacity-0.8 cursor-pointer"
//                               onClick={() => handleChangeImage(1)}
//                           >
//                               <ChevronRight />
//                           </div>
//                       </div>

//                       <ShirtListComponent
//                           name={product.name}
//                           price={product.price}
//                           colors={product.colors}
//                           sizes={product.sizes}
//                           className={
//                               'grid grid-columns-3 h-full bg-transparent '
//                           }
//                       />
//                   </div>

//                   <section></section>
//               </section>
//           </main>
