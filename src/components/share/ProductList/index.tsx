import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import DOMPurify from "isomorphic-dompurify";
import { exampleProducts } from '../../../contants/temporaryData';
import { ProductItem } from '../../../types';
import ProductCard from '../ProductCard';
import { getServerProducts } from '../../../hooks/server/products/getServerGetProducts';



interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}


async function ProductList({categoryId, limit, searchParams}:ProductListProps) {

  const products = await getServerProducts(categoryId, limit, searchParams);
  return (
 <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product: ProductItem) => (
            <ProductCard key={product._id} product={product}/>
      ))}
      {/* {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null} */}
    </div>
  );
};

export default ProductList