import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";

function Header({ cartCount }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const q = params.get("q") || "";

  function onSearchKey(e) {
    if (e.key === "Enter") {
      const value = e.currentTarget.value.trim();
      navigate(
        value ? `/products?q=${encodeURIComponent(value)}` : "/products"
      );
    }
  }
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          Mohammad Store
        </Link>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            المنتجات
          </NavLink>
        </nav>
        <div className="nav-right">
          <div className="search" role="search">
            <input
              defaultValue={q}
              onKeyDown={onSearchKey}
              placeholder="ابحث عن منتج..."
              aria-label="بحث"
            />
          </div>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            السلة
            <span className="cart-badge" aria-label="عدد العناصر في السلة">
              {cartCount}
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
