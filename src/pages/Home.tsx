import React from 'react';
import Category from '../components/Category';
import { useProductsContext } from '../ProductContext';

export default function Home() {
  const { products, products2 } = useProductsContext();

  return (
    <div className="section-products">
      <div className="container mb-huge">
        <Category title="Elektronik" products={products} />
      </div>
      <div className="container">
        <Category title="Ayakkabı" products={products2} />
      </div>
    </div>
  );
}
