import '../../Styles/AdminDashboard.css'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className="page-content">
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-6">
            <div className="card card-highlight text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://managementweekly.org/wp-content/uploads/2021/04/header.jpg"
                className="card-img-top rounded-6"
                alt="Banking"
              />
              <div className="card-body">
                <h5 className="card-title">Customer Data Management</h5>
                <p className="card-text">
                  Registered Users and their details.
                </p>
                <Link to="/admin/customers"><button className="btn btn-custom">Details</button></Link>
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
                <h5 className="card-title">Loan Card Management</h5>
                <p className="card-text">
                  Manage user loan cards.
                </p>
                <Link to="/admin/loan-card"><button className="btn btn-custom">Details</button></Link>
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
                <h5 className="card-title">Items Master Data</h5>
                <p className="card-text">
                  Manage user item details.
                </p>
                <Link to="/admin/items"><button className="btn btn-custom">Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;