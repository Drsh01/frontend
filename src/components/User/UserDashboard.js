const UserDashboard = () => {
  return (
    <div className="row">
      <div className="col-6 text-center" style={{ marginTop: "50px" }}>
          <img src="/user-dash-logo.png" alt="User logo" />
          {/* <h1 className="mb-4" style={{ fontSize: "4rem" }}>User Dashboard</h1> */}
          <p style={{ fontSize: "2.5rem", marginTop: "50px" }}>User Dashboard shows all the actions available to the user</p>
      </div>
      <div className="row d-flex flex-column justify-center col-6 border-left" style={{ marginTop: "90px"}}>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem" }}>
          <div className="card-body">
            <h3 className="card-title">View Loans</h3>
            <p className="card-text">This feature helps users to view his previous loans.</p>
            <a href="/user/view-loans" className="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div className="card-body">
            <h3 className="card-title">Apply for Loan</h3>
            <p className="card-text">This feature helps users to apply for loan.</p>
            <a href='/user/apply' className="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div className="card-body">
            <h3 className="card-title">View Items Purchased</h3>
            <p className="card-text">This feature helps users to view previously purchased items.</p>
             <a href="/user/view-items" className="btn btn-primary mb-4 col-6">Details</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;