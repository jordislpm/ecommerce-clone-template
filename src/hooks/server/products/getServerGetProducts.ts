
import { formatProductResponse } from "../../../lib/format/formatProductResponse";
import { getWixProducts } from "../../../services/wixClient/products/getWixProducts";

export async function getServerProducts(
  categoryId?: string,
  limit?: number,
  searchParams?: any
) {
  const items = await getWixProducts({ categoryId, limit, searchParams });
  return items.map(formatProductResponse);
}