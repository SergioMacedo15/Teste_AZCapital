import React from 'react'
import { Search } from 'feather-icons-react/build/IconComponents'
const SearchInput = ({ onChange = () => {} }) => {
    return (
        <div className="flex w-full max-w-[300px] bg-principal px-3 py-1 border border-gray-300 rounded-xl text-sm">
            <input
                type="text"
                placeholder="Pesquise"
                onChange={onChange}
                className="flex w-full focus:outline-none bg-transparent"
            />

            <Search className="text-secundary px-1" />
        </div>
    )
}

export default SearchInput
