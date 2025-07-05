'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import CartModal from '../../../share/CartModal';
import { serialize } from 'v8';

function NavIcons() {

    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const router = useRouter();

    // Temporary
    const isLoggedIn = true;

    const handleProfle = () => {

        if (!isLoggedIn) {
            router.push("/login")
        }
        if (isCartOpen) { setIsCartOpen(false) }
        setIsProfileOpen((prev) => !prev)
    }

    const handleCart = () => {
        if (isProfileOpen) {
            setIsProfileOpen(false)
        }

        setIsCartOpen((prev) => !prev)
    }

    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Image
                src='/profile.png'
                alt='profile'
                height={22} width={22}
                className='cursor-pointer'
                onClick={handleProfle}
            />
            {
                isProfileOpen &&
                <div className='absolute p-4 top-12 rounded-md left-0 shadow-modal z-20'>
                    <Link className='hover-underline-main' href="/">Profile</Link>
                    <div className='mt-2 cursor-pointer hover-underline-main'>Logout</div>
                </div>
            }
            <Image
                src='/notification.png'
                alt='profile'
                height={22}
                width={22}
                className='cursor-pointer'
            />
            <div className='relative cursor-pointer'>
                <Image
                    src='/cart.png'
                    alt='profile'
                    height={22}
                    width={22}
                    onClick={handleCart}
                />
                <div
                    className='absolute -top-4 -right-4 w-6 h-6 bg-secundary rounded-full text-white text-sm flex items-center justify-center'
                >2
                </div>
            </div>
            {
                isCartOpen &&
                <CartModal />
            }
        </div>
    )
}

export default NavIcons