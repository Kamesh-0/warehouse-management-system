function RecentSuppliers({ suppliers }) {
  const recentSuppliers = suppliers.slice(-5);

  return (
    <div className="recent-box">
      <h2>Recent Suppliers</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier</th>
            <th>Company</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {recentSuppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.supplierName}</td>
              <td>{supplier.companyName}</td>
              <td>{supplier.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentSuppliers;