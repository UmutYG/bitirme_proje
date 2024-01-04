import { useParams } from "react-router-dom"
import { useProductsContext } from "../ProductContext";
import { ProductModel } from "../components/Category";

export default function ProductDetail() {
  const {pId} = useParams()
  console.log(pId)
  const { products } = useProductsContext();



  const clickedProduct = products.find((p) => p._id === pId)
  
  return (
    <div className="product-container">
      <div className="image-gallery">
        <img src=  {clickedProduct?.urun_fotosu} alt="Laptop Main" className="main-image" />
      </div>

      <div className="product-details">
        <h1>
         {clickedProduct?.urun_markasi}
        </h1>
        <p className="price"> {clickedProduct?.urun_fiyat}</p>
        <p className="description">
        <p className="price"> {clickedProduct?.urun_adi}</p>

        </p>
        <a href={clickedProduct?.urun_link} className="purchase-button">
          Siteye git
        </a>
      </div>
    </div>
  )
}
