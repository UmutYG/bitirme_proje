import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { ProductModel } from './components/Category';

interface ProductsContextProps {
  products: ProductModel[];
  products2: ProductModel[];
  fetchProducts: () => void;
}

// Create a context with a default value
export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  products2: [],
  fetchProducts: () => {},
});

// Define the type for the provider props
interface ProductsProviderProps {
  children: ReactNode; // This line ensures that children are of type ReactNode
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [products2, setProducts2] = useState<ProductModel[]>([]);

  const fetchProducts = useCallback(() => {
    fetch("http://localhost:6010/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setProducts2(data.products_2);
      });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductsContext.Provider value={{ products, products2, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to use the products context
export const useProductsContext = () => useContext(ProductsContext);
