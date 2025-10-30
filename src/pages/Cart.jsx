function Cart({ items, onIncrease, onDecrease, onRemove, onClear }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div
        className="container state empty"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        السلة فارغة
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <div className="cart-list">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="ci-info">
              <div className="ci-title" title={item.title}>
                {item.title}
              </div>
              <div className="ci-meta">
                <span className="price">${item.price.toFixed(2)}</span>
              </div>
              <div className="ci-actions">
                <button onClick={() => onDecrease(item.id)}>-</button>
                <span className="qty">{item.quantity}</span>
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button className="link" onClick={() => onRemove(item.id)}>
                  إزالة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <aside className="cart-summary">
        <div className="summary-row">
          <span>المجموع</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <button className="btn w-full" onClick={onClear}>
          إفراغ السلة
        </button>
        <button
          style={{ marginTop: "10px" }}
          className="btn w-full alt"
          onClick={() => alert("تمت المحاكاة: إتمام الشراء")}
        >
          إتمام الشراء
        </button>
      </aside>
    </div>
  );
}

export default Cart;
