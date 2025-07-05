import Link from 'next/link'
import React from 'react'
import { myStoreInfo } from '../../../../contants/general'
import Menu from '../Menu'
import Image from 'next/image'
import SearchBar from '../../../share/SearchBar'
import NavIcons from '../NavIcons'

function NavBar() {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative w-full'>
            {/* Mobile */}
            <div className='flex h-full items-center justify-between md:hidden'>
                <Link href="/">
                    <div className='text-2xl tracking-wide'>
                        <Image className='w-180 lg:w-250 xl:w-450' src="/oliStore.png" alt='logo' width={180} height={50} />
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Bigger screen */}
            <div className='hidden md:flex items-center justify-center gap-8 h-full w-full'>
                {/* Left */}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Link href="/">
                        <div className='text-2xl tracking-wide'>
                            <Image className='w-180 lg:w-250 xl:w-450' src="/oliStore.png" alt='logo' width={180} height={50} />
                        </div>
                    </Link>
                    <div className='hidden xl:flex gap-4'>
                        <Link
                            className='border-b-2 border-transparent hover:border-b-2 hover:border-main text-md text-secundary hover:scale-105 transform transition-transform duration-200'
                            href="/"
                        >Home
                        </Link>
                        <Link
                            className='border-b-2 border-transparent hover:border-b-2 hover:border-main text-md text-secundary hover:scale-105 transform transition-transform duration-200'
                            href="/"
                        >Shop
                        </Link>
                        <Link
                            href="/"
                            className='border-b-2 border-transparent hover:border-b-2 hover:border-main text-md text-secundary hover:scale-105 transform transition-transform duration-200'
                        >Deals
                        </Link>
                        <Link
                            href="/"
                            className='border-b-2 border-transparent hover:border-b-2 hover:border-main text-md text-secundary hover:scale-105 transform transition-transform duration-200'
                        >About
                        </Link>
                        <Link
                            href="/"
                            className='border-b-2 border-transparent hover:border-b-2 hover:border-main text-md text-secundary hover:scale-105 transform transition-transform duration-200'
                        >Contact
                        </Link>
                    </div>
                </div>
                {/* Right */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default NavBar