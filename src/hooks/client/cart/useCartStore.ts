import { cartStore } from "../../../services/wixClient/cart/cartStore";

const useCartStore = () => {
  const addItem = cartStore((state) => state.addItem);
  const cart = cartStore((state) => state.cart);
  const counter = cartStore((state) => state.counter);
  const getCart = cartStore((state) => state.getCart);
  const isLoading = cartStore((state) => state.isLoading);
  const removeItem = cartStore((state) => state.removeItem);

  return { addItem, cart, counter, getCart, isLoading, removeItem };
};

export default useCartStore;
