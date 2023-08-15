const UserDashboard = () => {
  return (
    <div class="row">
      <div class="col-6 text-center" style={{ marginTop: "50px" }}>
          <img src="/user-dash-logo.png" alt="User logo" />
          <h1 class="mb-4" style={{ fontSize: "4rem" }}>User Dashboard</h1>
          <p style={{ fontSize: "2.5rem", marginTop: "50px" }}>User Dashboard shows all the actions available to the user</p>
      </div>
      <div class="row d-flex flex-column justify-center col-6 border-left" style={{ marginTop: "90px"}}>
        <div class="card col-8 text-center" style={{ marginLeft: "2rem" }}>
          <div class="card-body">
            <h3 class="card-title">View Loans</h3>
            <p class="card-text">This feature helps users to view his previous loans.</p>
            <a href="/user/view-loans" class="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div class="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div class="card-body">
            <h3 class="card-title">Apply for Loan</h3>
            <p class="card-text">This feature helps users to apply for loan.</p>
            <a href='/user/apply' class="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div class="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div class="card-body">
            <h3 class="card-title">View Items Purchased</h3>
            <p class="card-text">This feature helps users to view previously purchased items.</p>
             <a href="/user/view-items" class="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;