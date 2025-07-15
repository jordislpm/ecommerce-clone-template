
import { formatPagination } from "../../../lib/format/formatPagination";
import { formatProductResponse } from "../../../lib/format/formatProductResponse";
import { getWixProducts } from "../../../services/wixClient/products/getWixProducts";

export async function getServerProducts(
  categoryId?: string,
  limit?: number,
  searchParams?: any
) {
const res = await getWixProducts({ categoryId, limit, searchParams });



const pagination = formatPagination({hasNext: res.hasNext(), hasPrev: res.hasPrev(),currentPage: res.currentPage })

const products = res.items.map(formatProductResponse);
  return {products, pagination}

}