import useLocalStorage from "./useLocalStorage";

export default function useCartItems() {
    return useLocalStorage("cartItems", []);
}
