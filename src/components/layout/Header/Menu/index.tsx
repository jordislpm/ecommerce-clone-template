"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";

function Menu() {

    const [open, setOpen] = useState<boolean>(false)
    return (
        <div>
            <IoMenu className='cursor-pointer text-main hover:text-secundary w-10 h-10'
                onClick={() => setOpen(!open)}/>
            {/* <Image src="/hamburger-menu.svg" width={28} height={28} alt='menu-button' className='cursor-pointer text-orange-500 hover:text-blue-500'
                onClick={() => setOpen(!open)} /> */}
            {open && (
                <div className='absolute bg-main text-secundary left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                    <Link href="/">Home</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart (1)</Link>
                </div>
            )}
        </div>
    )
}

export default Menu