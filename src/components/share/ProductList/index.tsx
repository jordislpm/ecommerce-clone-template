import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import DOMPurify from "isomorphic-dompurify";
import { exampleProducts } from '../../../contants/temporaryData';
import { ProductItem } from '../../../types';
import ProductCard from '../ProductCard';

function ProductList() {
  return (
 <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {exampleProducts.map((product: ProductItem) => (
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