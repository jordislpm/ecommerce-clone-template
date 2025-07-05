"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { kidsClothingCategories } from '../../../contants/temporaryData';
import CategoryCard from '../CategoryCard';


function CategoryList() {

    const [current, setCurrent] = useState(0);


    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = window.innerWidth < 768 ? 200 : 400
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            })
        }
    }

    return (
        <div className="relative px-4">


            <div
                className="px-4 overflow-x-auto scrollbar-hide scroll-smooth"
                ref={scrollRef}
                style={{ transform: `translateX(-${current * 100}px)` }}>
                <div className="flex gap-4 md:gap-8">
                    {kidsClothingCategories.map((item) => (
                        <CategoryCard
                            key={item._id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
            {/*RIGT BUTTON */}
                <div
                    onClick={() => scroll('right')}
                    className='hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow '>
                    <Image src='/next.png' alt='' height={45} width={45} />
                </div>
                {/*LEFT BUTTON */}
                <div
                    onClick={() => scroll('left')}
                    className='hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow rotate-180'>
                    <Image src='/next.png' alt='' height={45} width={45} />
                </div>
        </div>
    );
};

export default CategoryList;