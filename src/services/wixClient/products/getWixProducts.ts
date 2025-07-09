import { wixClient } from "../../../lib/wixClients/wixClient";


interface GetWixProducts {
  categoryId?: string;
  limit?: number;
}

export async function getWixProducts({ categoryId, limit }: GetWixProducts) {
  let query = wixClient.products.queryProducts();

  if (categoryId?.trim()) {
    query = query.hasSome("collectionIds", [categoryId]);
  }
  if (typeof limit === "number" && limit > 0) {
    query = query.limit(limit);
  }

  const response = await query.find(); // sin errores si no limit ni cat
  return response.items;
}