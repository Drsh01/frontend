import '../../Styles/AdminDashboard.css'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <>
    
    <div className="page-content">
      <div className="container mt-4">
        <div className="row justify-content-center" style={{marginTop:"120px"}}>
          <div className="col-md-4 mb-6">
            <div className="card card-highlight text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://managementweekly.org/wp-content/uploads/2021/04/header.jpg"
                className="card-img-top rounded-6"
                alt="Banking"
              />
              <div className="card-body">
                <h5 className="card-title">View Loans</h5>
                <p className="card-text">
                  View all your existing loans.
                </p>
                <Link to="/user/view-loans"><button className="btn btn-custom">Details</button></Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-6">
            <div className="card card-highlight text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://img.freepik.com/premium-vector/loan-credit-bank-management-money-credit-card-concept_385073-182.jpg?w=2000"
                className="card-img-top rounded-6"
                alt="Banking"
              />
              <div className="card-body">
                <h5 className="card-title">Apply for Loan</h5>
                <p className="card-text">
                  Apply for a new loan.
                </p>
                <Link to="/user/apply"><button className="btn btn-custom">Details</button></Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-6">
            <div className="card card-highlight text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://media.istockphoto.com/id/1288081906/vector/happy-female-entrepreneur-surrounded-money.jpg?s=612x612&w=0&k=20&c=FNGZi_Cp8_2i1_q-gCtlFvpFHJhA7LwNCMopo3xYM1U="
                className="card-img-top rounded-6"
                alt="Banking"
              />
              <div className="card-body">
                <h5 className="card-title">View Items Purchased</h5>
                <p className="card-text">
                  View your previously purchased items.
                </p>
                <Link to="/user/view-items"><button className="btn btn-custom">Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* 
    <div className="row">
      <div className="col-6 text-center d-flex align-center justify-center">
          <img src="/user-dash-logo.png" alt="User logo" title="User Dashboard shows all the actions available to the user" />
      </div>
      <div className="row d-flex flex-column justify-center col-6 border-left" style={{ marginTop: "90px"}}>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem" }}>
          <div className="card-body">
            <h3 className="card-title">View Loans</h3>
            <p className="card-text">This feature helps users to view his previous loans.</p>
            <a href="/user/view-loans" className="btn btn-success mb-4 col-6">Details</a>
          </div>
        </div>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div className="card-body">
            <h3 className="card-title">Apply for Loan</h3>
            <p className="card-text">This feature helps users to apply for loan.</p>
            <a href='/user/apply' className="btn btn-success mb-4 col-6">Details</a>
          </div>
        </div>
        <div className="card col-8 text-center" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
          <div className="card-body">
            <h3 className="card-title">View Items Purchased</h3>
            <p className="card-text">This feature helps users to view previously purchased items.</p>
             <a href="/user/view-items" className="btn btn-success mb-4 col-6">Details</a>
          </div>
        </div>

      </div>
    </div> */}
    </>
  )
}

export default UserDashboard;