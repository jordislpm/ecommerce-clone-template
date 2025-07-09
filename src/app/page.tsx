import CollectionList from "../components/share/CollectionList";
import ProductList from "../components/share/ProductList"
import Slider from "../components/share/Slider"
import { getServerCollections } from "../hooks/server/products/getServerCollections";

import React from 'react'

async function HomePage (){

  const collections = await getServerCollections()

  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-8">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList categoryId=""
       />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CollectionList collections={collections}/>
      </div>
           <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Matching Sets</h1>
        <ProductList categoryId="e341fe86-cfaa-42f3-8f3c-9e883c7cca20"/>
      </div>

    </div>
  )
}

export default HomePage