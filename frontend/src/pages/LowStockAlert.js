function LowStockAlert({ products }) {
  const lowStockProducts = products.filter((product) => product.quantity < 10);

  return (
    <div className="recent-box">
      <h2>⚠️ Low Stock Alert</h2>

      {lowStockProducts.length === 0 ? (
        <p>No low stock products</p>
      ) : (
        <ul>
          {lowStockProducts.map((product) => (
            <li key={product.id}>
              {product.productName} - {product.quantity} left
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LowStockAlert;