
const AdminDashboard = () => {
    return<div>
        <div style={{textAlign:"center",marginTop:"5rem",fontSize:"1.5rem"}} >Loan Management Application</div>
        <div style={{textAlign:"center",marginTop:"2rem",fontSize:"1.5rem"}}>Admin Dashboard</div>
        


<div class="container">
  <div class="row align-items-start">
    <div class="col">
     <div class="card" style={{width : "20rem",marginLeft:"2rem",marginTop:"2rem"}}>
     <div class="card-body">
    <h5 class="card-title">Customer Data Management</h5>
    <p class="card-text">This feature helps admin manage customers data.</p>
    <button type="button" class="btn btn-success btn-block col-6 mb-4">Details</button>
  </div>
  </div>
  </div>
  <div class="col">
<div class="card" style={{width : "18rem",marginLeft:"2rem",marginTop:"2rem"}}>
  <div class="card-body">
    <h5 class="card-title">Loan Card Management</h5>
    <p class="card-text">This feature helps admin manage loan card of the users.</p>
    <button type="button" class="btn btn-success btn-block col-6 mb-4">Details</button>
  </div>
  </div>
  </div>
  <div class="col">
<div class="card" style={{width : "18rem",marginLeft:"2rem",marginTop:"2rem"}}>
  <div class="card-body">
    <h5 class="card-title">Items Master Data</h5>
    <p class="card-text">This feature helps admin manage product details.</p>
    <button type="button" class="btn btn-success btn-block col-6 mb-4">Details</button>
  </div>
  </div>
  </div>

  </div>
  </div>
  

        </div>
}

export default AdminDashboard;