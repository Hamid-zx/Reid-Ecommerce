export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity?: number;
  }
  
  export interface Brand {
    name: string;
    logo: string;
  }

  // CartItem type definition (extends Product with quantity)
export interface CartItem extends Product {
    quantity: number;
  }