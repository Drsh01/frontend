import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCustomerComponent from "./Admin/AddCustomerComponent";
import AddItemComponent from "./Admin/AddItemComponent";
import AddLoanCardComponent from "./Admin/AddLoanCardComponent";
import AdminDashboard from "./Admin/AdminDashboard";
import ManageCustomers from "./Admin/ManageCustomers";
import ManageItems from "./Admin/ManageItems";
import ManageLoanCards from "./Admin/ManageLoanCards";
import Login from "./Login";
import ApplyLoan from "./User/ApplyLoan";
import UserDashboard from "./User/UserDashboard";
import ViewItems from "./User/ViewItems";
import ViewLoan from "./User/ViewLoan";
import { AdminRoute } from "./AdminRoute";
import { AuthenticatedRoute } from "./AuthenticatedRoute";

const Routes = () => {
    const routesForPublic = [
        {
            path: "/",
            element: <Login />
        }
    ];

    const routesForUser = [
        {
            path: "/user",
            element: <AuthenticatedRoute />,
            children: [
                {
                    path: '/user/dashboard',
                    element: <UserDashboard />
                },
                {
                    path: '/user/apply',
                    element: <ApplyLoan />
                },
                {
                    path: '/user/view-loans',
                    element: <ViewLoan />
                },
                {
                    path: '/user/view-items',
                    element: <ViewItems />
                }
            ]
        }
    ]

    const routesForAdmin = [
        {
            path: "/admin",
            element: <AdminRoute />,
            children: [
                {
                    path: '/admin/dashboard',
                    element: <AdminDashboard />
                },
                {
                    path: '/admin/items',
                    element: <ManageItems />
                },
                {
                    path: "/admin/add-item",
                    element: <AddItemComponent />
                },
                {
                    path: "/admin/edit-item/:id",
                    element: <AddItemComponent />
                },
                {
                    path: '/admin/customers',
                    element: <ManageCustomers />
                },
                {
                    path: "/admin/add-customer",
                    element: <AddCustomerComponent />
                },
                {
                    path: "/admin/edit-customer/:id",
                    element: <AddCustomerComponent />
                },
                {
                    path: '/admin/loan-card',
                    element: <ManageLoanCards />
                },
                {
                    path: '/admin/loan-card/add',
                    element: <AddLoanCardComponent />
                },
                {
                    path: '/admin/edit-loanCard/:id',
                    element: <AddLoanCardComponent />
                }
            ]
        },
    ]

    const router = createBrowserRouter([
        ...routesForAdmin,
        ...routesForPublic,
        ...routesForUser
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;