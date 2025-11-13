export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const cart = getCart();
  const existingItem = cart.find(i => i.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
}

export function removeFromCart(id: string) {
  const cart = getCart().filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
}

export function updateQuantity(id: string, quantity: number) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  
  if (item) {
    item.quantity = Math.max(1, quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  }
}

export function clearCart() {
  localStorage.removeItem('cart');
  window.dispatchEvent(new Event('cartUpdated'));
}

export function getCartTotal(): number {
  return getCart().reduce((total, item) => total + (item.price * item.quantity), 0);
}
