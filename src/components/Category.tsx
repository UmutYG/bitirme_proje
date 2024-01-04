import { useEffect, useState } from "react"
import Product from "./Product"

interface CategoryProps {
  title: String
  products: ProductModel[]
}

export type ProductModel = {
    _id: string,
    urun_adi: string,
    urun_markasi: string,
    urun_fiyat: string,
    urun_puan: string,
    urun_degerlendirme_sayisi: string,
    urun_fotosu: string,
    urun_link: string,
    allProducts: any
    
  };

export default function Category(props: CategoryProps) {
 
  return (
    <>
      <h2 className="heading-secondary mb-medium">{props.title}</h2>
      <div className="grid--6-cols">
        {props.products.map((p) => <Product allProducts={props.products} key={p._id.toString()} product={p} />)}
      </div>
    </>
  )
}
