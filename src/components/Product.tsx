import { Link } from "react-router-dom"
import { ProductModel } from "./Category"
import StarRating from "./StarRating"



export default function Product(props: { product: ProductModel, allProducts: any }) {
  return (
    <div className="product-box">
      <Link to={`/productDetail/${props.product._id}`} className="product">
        <div className="product__image-box">
          <img
            src={props.product.urun_fotosu}
            alt="Product Image"
            className="product__image"
          />
        </div>
        <div className="product__details">
          <p className="product__details__price">
            {"₺" + props.product.urun_fiyat}
          </p>
          <p className="product__details__name">
            {props.product.urun_adi.substring(0, 40) + "..."}
          </p>
          <div className="product__details__review-box">
            <StarRating
              value={parseFloat(props.product.urun_puan.replace(",", "."))}
            />
            <span className="product__details__review__review-count">{props.product.urun_degerlendirme_sayisi.split(" ")[0]}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
