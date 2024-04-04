import ShirtListComponent from '@/components/shirtListItem'
import React, { useEffect } from 'react'
import ColorFilter from '@/components/Filters/colorFilter'
import SearchInput from '@/components/searchInput'
import { useRouter } from 'next/router'
const index = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/home')
    }, [])
    return (
        <div>
            teste
            <SearchInput />
        </div>
    )
}

export default index
