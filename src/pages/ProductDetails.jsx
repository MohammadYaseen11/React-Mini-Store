import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../api/client";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const data = await getProduct(id);
        if (mounted) setProduct(data);
      } catch (e) {
        setError("تعذر تحميل المنتج");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="details skeleton" />
      </div>
    );
  }
  if (error) {
    return <div className="container state error">{error}</div>;
  }
  if (!product) {
    return <div className="container state empty">المنتج غير موجود</div>;
  }

  return (
    <div className="container details">
      <div className="details-grid">
        <div className="details-thumb">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details-info">
          <h1 className="details-title">{product.title}</h1>
          <div className="details-meta">
            <span className="price">${product.price.toFixed(2)}</span>
            <span className="category">{product.category}</span>
          </div>
          <p className="details-desc">{product.description}</p>
          <div className="details-actions">
            <button className="btn" onClick={() => onAddToCart(product)}>
              أضف إلى السلة
            </button>
            <Link to="/" className="btn alt">
              عودة للتسوق
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
