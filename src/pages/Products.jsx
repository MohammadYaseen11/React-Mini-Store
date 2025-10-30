import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories, getProducts } from "../api/client";
import ProductCard from "../components/ProductCard";

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(() => params.get("q") || "");
  const [sort, setSort] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const [cats, prods] = await Promise.all([
          getCategories(),
          getProducts(category),
        ]);
        if (!mounted) return;
        setCategories(cats);
        setProducts(prods);
        const max = prods.reduce((m, p) => Math.max(m, p.price), 0);
        setMaxPrice((prev) => (prev === 0 ? Math.ceil(max) : prev));
      } catch (e) {
        setError("حدث خطأ أثناء تحميل البيانات");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [category]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products
      .filter((p) => (q ? p.title.toLowerCase().includes(q) : true))
      .filter((p) => (maxPrice ? p.price <= maxPrice : true));
    if (sort === "price-asc")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, query, sort, maxPrice]);

  function updateQuery(next) {
    setQuery(next);
    const copy = new URLSearchParams(params);
    if (next) copy.set("q", next);
    else copy.delete("q");
    setParams(copy, { replace: true });
  }

  return (
    <div className="container products-page">
      <div className="controls">
        <div className="field">
          <label>الفئة</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="field grow">
          <label>بحث</label>
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
        <div className="field">
          <label>السعر الأقصى</label>
          <input
            type="number"
            min={0}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value) || 0)}
          />
        </div>
        <div className="field">
          <label>ترتيب</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="popular">الأكثر شيوعًا</option>
            <option value="price-asc">السعر: تصاعدي</option>
            <option value="price-desc">السعر: تنازلي</option>
          </select>
        </div>
      </div>

      {loading && (
        <div className="grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="product-card skeleton" />
          ))}
        </div>
      )}

      {!loading && error && <div className="state error">{error}</div>}

      {!loading && !error && filtered.length === 0 && (
        <div className="state empty">لا توجد نتائج مطابقة</div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
