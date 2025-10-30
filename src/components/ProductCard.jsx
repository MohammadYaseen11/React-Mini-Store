import { Link } from "react-router-dom";

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="thumb-wrap">
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>
      <div className="product-info">
        <Link
          to={`/product/${product.id}`}
          className="title"
          title={product.title}
        >
          {product.title}
        </Link>
        <div className="meta">
          <span className="price">${product.price.toFixed(2)}</span>
          <span className="category">{product.category}</span>
        </div>
        <button className="btn" onClick={() => onAdd(product)}>
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
