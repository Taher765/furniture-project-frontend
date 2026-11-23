import "./ProductCard.css";
import image from "../../assets/images/catalog-5-00.jpg";
import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <div className="card-item p-2 rounded mb-3">
      <img src={image} height={170} alt="" className="w-100" />
      <div className="info">
        <h4 className="m-0 main-heading">اسم المنتج</h4>
        <p className="m-0">وصف المنتج</p>
        <div className="price">
          <span>السعر </span>
          <span>الخصم </span>
          <span>النهائي</span>
        </div>
      </div>
      <Link
        to={"/ProductDetails"}
        className="btn-style mt-2 d-block text-center"
      >
        تفاصيل المنتج
      </Link>
    </div>
  );
}

export default ProductCard;
