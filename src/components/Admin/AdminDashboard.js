
const AdminDashboard = () => {
  return (
    <div class="row">
      <div class="col-6 text-center" style={{ marginTop: "100px" }}>
          <img src="https://logodix.com/logo/1707130.png"  alt="Admin logo" />
          <h1 class="mb-4" style={{ fontSize: "4rem" }}>Admin Dashboard</h1>
          <p style={{ fontSize: "2.5rem", marginTop: "50px" }}>Admin Dashboard shows all the actions available to an admin</p>
      </div>
      <div class="row d-flex flex-column justify-center col-6 border-left" style={{ marginTop: "90px"}}>
        <div class="card col-8 text-center" style={{ marginLeft: "2rem" }}>
          <div class="card-body">
            <h3 class="card-title">Customer Data Management</h3>
            <p class="card-text">This feature helps admin manage customers data.</p>
            <a href="/admin/customers" class="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div class="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div class="card-body">
            <h3 class="card-title">Loan Card Management</h3>
            <p class="card-text">This feature helps admin manage loan card of the users.</p>
            <a href='/admin/loan-card' class="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div class="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div class="card-body">
            <h3 class="card-title">Items Master Data</h3>
            <p class="card-text">This feature helps admin manage product details.</p>
             <a href="/admin/items" class="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;