import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-card">
          <h1>تسوق بسهولة وبساطة</h1>
          <p style={{ direction: "rtl" }}>
            واجهة تجريبية تعرض منتجات حقيقية باستخدام FakeStoreAPI.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/products">
              تصفح المنتجات
            </Link>
            <Link className="btn alt" to="/cart">
              اذهب إلى السلة
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
