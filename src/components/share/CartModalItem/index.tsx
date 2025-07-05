'use client'
import Image from 'next/image'
import React from 'react'



function CartModalItem() {
    return (
        <div className='flex gap-4'>
            <Image
                src="/temporary/boyTshirt.jpg"
                alt=""
                width={72}
                height={96}
                className='object-cover rounded-md'
            />
            <div className=' flex flex-col justify-between w-full'>
                {/* TOP */}
                <div className=''>
                    {/* TITTLE*/}
                    <div className='flex items-center justify-between gap-8'>
                        <h3 className='font-semibold'>Product Name</h3>
                        <div className='p-1 bg-secundary_second rounded-sm'>$49</div>
                    </div>
                    {/* DESC */}
                    <div className='text-sm text-gray-500'>
                        available
                    </div>
                </div>
                {/* BOTTOM */}
                <div className='flex justify-between text-sm'>
                    <span className='text-gray-500'>Qty. 2</span>
                    <span className='text-main_second cursor-pointer'>Remove</span>
                </div>

            </div>
        </div>
    )
}

export default CartModalItem