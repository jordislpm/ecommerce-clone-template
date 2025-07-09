import Image from 'next/image';
import React from 'react'
import ProductList from '../../components/share/ProductList';
//
import { kidsClothingCategories } from '../../contants/temporaryData';
import ButtonRound from '../../components/share/ButtonRound';
import PromotionalSection from '../../components/share/PromotionalSection';
import Filter from '../../components/share/Filter';

async function ListPage({ searchParams }: { searchParams: any }) {


  const cat = { collection: kidsClothingCategories[0] }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <PromotionalSection/>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name} For You!</h1>
      <ProductList
        categoryId={
          searchParams.cat || "all-products"
        }
        searchParams={searchParams}
      />

    </div>
  );
};


export default ListPage