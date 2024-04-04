import React, { useEffect, useState } from 'react'
import ShirtListComponent from '@/components/shirtListItem'
import { Columns, ChevronDown } from 'feather-icons-react/build/IconComponents'
import CheckBoxFilter from '@/components/Filters/checkBoxFilter'
import PriceRangeFilter from '@/components/Filters/priceRangeFilter'
import { products, slideShirtsImage } from '@/mock/products'
import { validSizes } from '@/constants/sizes'
import { validColors } from '@/constants/colors'
import ColorFilter from '@/components/Filters/colorFilter'
import SearchInput from '@/components/searchInput'
import { useRouter } from 'next/router'

const index = () => {
    const [filter, setFilter] = useState()
    const [productFiltred, setProductFiltred] = useState(products)
    const [showFilter, setShowFilter] = useState(false)
    const router = useRouter()
    const [isSmall, setIsSmall] = useState()

    const handleFilter = (type, value) => {
        const newFilter = { ...filter, [type]: value }
        setFilter(newFilter)

        if (newFilter) {
            setProductFiltred(filterProducts(products, newFilter))
        } else {
            setProductFiltred(products)
        }
    }

    const filterProducts = (products, filters) => {
        return products.filter((product) => {
            if (filters.sizes && filters.sizes.length > 0) {
                if (
                    !filters.sizes.some((size) => product.sizes.includes(size))
                ) {
                    return false
                }
            }

            if (filters.price && filters.price.min) {
                if (parseFloat(product.price) < parseFloat(filters.price.min)) {
                    return false
                }
            }

            if (filters.price && filters.price.max) {
                if (parseFloat(product.price) > parseFloat(filters.price.max)) {
                    return false
                }
            }

            if (filters.colors && filters.colors.length > 0) {
                if (
                    !filters.colors.some((color) => {
                        if (Array.isArray(product.colors[0])) {
                            return product.colors.some(
                                ([primaryColor, secondaryColor]) =>
                                    primaryColor === color ||
                                    secondaryColor === color
                            )
                        } else {
                            return product.colors.includes(color)
                        }
                    })
                ) {
                    return false
                }
            }

            return true
        })
    }

    const handleMoreDetails = (index) => {
        router.push({
            pathname: 'home/details',
            query: { data: JSON.stringify(productFiltred[index]) },
        })
    }

    const handleSearchInput = (event) => {
        const { value } = event.target

        const results = productFiltred.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        )
        setProductFiltred(value ? results : products)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 1024)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="flex flex-col px-[20px]  py-[50px] gap-[20px]">
            <div className="flex itens-center justify-center md:justify-end">
                <SearchInput onChange={handleSearchInput} />
            </div>
            <div className="flex justify-between px-4">
                <div
                    onClick={() => setShowFilter(!showFilter)}
                    className={`flex gap-2 p-2 items-center text-sm cursor-pointer capitalize justify-center ${
                        showFilter ? 'font-bold ' : ''
                    }`}
                >
                    <Columns />
                    Mostrar Filtros
                </div>
            </div>
            <div className="flex gap-[0px]">
                <div
                    className={` w-[0px] overflow-hidden ${
                        showFilter ? ' w-[100%]  px-4' : 'w-[0px]'
                    }
                    ${!isSmall ? 'max-w-[400px]' : ''}`}
                >
                    <CheckBoxFilter
                        type="sizes"
                        handleFilter={handleFilter}
                        title="Tamanhos"
                        options={validSizes}
                    />
                    <PriceRangeFilter
                        type="price"
                        title="Valor"
                        handleFilter={handleFilter}
                    />
                    <ColorFilter
                        type="colors"
                        title="Colors"
                        colors={validColors}
                        handleFilter={handleFilter}
                    />
                </div>

                <div
                    className={`w-full overflow-hidden ${
                        isSmall && showFilter ? 'w-[0%] ' : ''
                    }`}
                >
                    <div
                        className={`grid px-4 gap-[10px] p-5 bg-principal w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden `}
                    >
                        {productFiltred.map((item, index) => (
                            <ShirtListComponent
                                key={index}
                                onClick={() => handleMoreDetails(index)}
                                name={item.name}
                                price={item.price}
                                colors={item.colors}
                                sizes={item.sizes}
                                image={slideShirtsImage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index
