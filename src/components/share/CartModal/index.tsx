'use client '
import React from 'react'
import CartModalItem from '../CartModalItem';
import ButtonRect from '../ButtonRect';

function CartModal() {

  const cartItems: boolean = true;

  return (
    <div className='z-20 absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 w-max'>
      <h2 className='text-xl'>Shopping Cart</h2>
      {!cartItems ?
        (
          <div>
            Cart is empty
          </div>
        ) : (
          <div className='w-max flex flex-col gap-8'>
            <CartModalItem />
            <CartModalItem />
            {/* BOTTOM */}
            <div className=''>
              <div className='flex items-center justify-between font-semibold'>
                <span className=''>Subtotal</span>
                <span className=''>$100</span>
              </div>
              <p className='text-white text-sm mt-2 mb-4 bg-main_second p-1'>
                Shipping and taxes calculated at checkout.
              </p>
              <div className='flex justify-between'>
                <ButtonRect text='View Cart' buttonAction={() => { }} />
                <ButtonRect text='Checkout' type='black' buttonAction={() => { }} />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default CartModal