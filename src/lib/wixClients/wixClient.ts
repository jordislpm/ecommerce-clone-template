import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie"; // para cliente

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "null");

export const wixClient = createClient({
  modules: {
    products,
    collections,
    currentCart,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken: refreshToken || undefined,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});