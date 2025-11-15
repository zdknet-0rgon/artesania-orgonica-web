// lib/cart.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function isClient(): boolean {
  return typeof window !== 'undefined';
}

export function getCart(): CartItem[] {
  if (!isClient()) return [];
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(item: Omit<CartItem, 'quantity'>): void {
  if (!isClient()) return;
  
  const cart = getCart();
  const existingItemIndex = cart.findIndex(i => i.id === item.id);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  
  if (isClient()) {
    window.dispatchEvent(new Event('cartUpdated'));
  }
}

export function removeFromCart(id: string): void {
  if (!isClient()) return;
  const cart = getCart().filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  
  if (isClient()) {
    window.dispatchEvent(new Event('cartUpdated'));
  }
}

export function updateQuantity(id: string, quantity: number): void {
  if (!isClient()) return;
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      localStorage.setItem('cart', JSON.stringify(cart));
      if (isClient()) {
        window.dispatchEvent(new Event('cartUpdated'));
      }
    }
  }
}

export function clearCart(): void {
  if (!isClient()) return;
  localStorage.removeItem('cart');
  
  if (isClient()) {
    window.dispatchEvent(new Event('cartUpdated'));
  }
}

export function getCartTotal(): number {
  return getCart().reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function getCartCount(): number {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}
