const UserDashboard = () => {
     return<div>
        <div style={{textAlign:"center",marginTop:"5rem",fontSize:"1.5rem"}} >Loan Management Application</div>
        <div style={{textAlign:"center",marginTop:"2rem",fontSize:"1.5rem"}}>User Dashboard</div>
        


<div class="container">
  <div class="row align-items-start">
    <div class="col">
     <div class="card" style={{width : "20rem",marginLeft:"2rem",marginTop:"2rem"}}>
     <div class="card-body">
    <h5 class="card-title">View Loans</h5>
    <p class="card-text">This feature helps users to view his previous loans.</p>
    <button type="button" class="btn btn-success btn-block col-6 mb-4">Details</button>
  </div>
  </div>
  </div>
  <div class="col">
<div class="card" style={{width : "18rem",marginLeft:"2rem",marginTop:"2rem"}}>
  <div class="card-body">
    <h5 class="card-title">Apply for Loan</h5>
    <p class="card-text">This feature helps users to apply for loan.</p>
    <button type="button" class="btn btn-success btn-block col-6 mb-4">Details</button>
  </div>
  </div>
  </div>
  <div class="col">
<div class="card" style={{width : "18rem",marginLeft:"2rem",marginTop:"2rem"}}>
  <div class="card-body">
    <h5 class="card-title">View Item Purchased</h5>
    <p class="card-text">This feature helps users to view previously purchased items.</p>
    <button type="button" class="btn btn-success btn-block col-6 mb-4">Details</button>
  </div>
  </div>
  </div>

  </div>
  </div>
  

        </div>
}

export default UserDashboard;