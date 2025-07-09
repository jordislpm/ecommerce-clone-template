import { formatProductResponse } from "../../../lib/format/formatResponse";
import { getWixProducts } from "../../../services/wixClient/products/getWixProducts";

export async function getServerProducts(
  categoryId?: string,
  limit?: number
) {
  console.log("getServerProducts", { categoryId, limit });
  const items = await getWixProducts({ categoryId, limit });
  return items.map(formatProductResponse);
}