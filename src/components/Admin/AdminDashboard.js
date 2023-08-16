
const AdminDashboard = () => {
  return (
    <div className="row">
      <div className="col-6 text-center" style={{ marginTop: "100px" }}>
          <img src="https://logodix.com/logo/1707130.png" alt="Admin logo" title="Admin Dashboard shows all the actions available to an admin" />
          <h1 className="mb-4" style={{ fontSize: "4rem" }}>Admin Dashboard</h1>
      </div>
      <div className="row d-flex flex-column justify-center col-6 border-left" style={{ marginTop: "90px"}}>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem" }}>
          <div className="card-body">
            <h3 className="card-title">Customer Data Management</h3>
            <p className="card-text">This feature helps admin manage customers data.</p>
            <a href="/admin/customers" className="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div className="card-body">
            <h3 className="card-title">Loan Card Management</h3>
            <p className="card-text">This feature helps admin manage loan card of the users.</p>
            <a href='/admin/loan-card' className="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div className="card-body">
            <h3 className="card-title">Items Master Data</h3>
            <p className="card-text">This feature helps admin manage product details.</p>
             <a href="/admin/items" className="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;