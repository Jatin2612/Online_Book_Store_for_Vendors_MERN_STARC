import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/shop";
import About from "../components/About";
import Blog from "../components/blogs";
import SingleBook from "../shop/singleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/book/:id',
                element: <SingleBook/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBooks/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks/>
            },
            {
                path: "/admin/dashboard/manage/edit-books/:id",
                element: <EditBooks/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            }

        ]
    },
    {
        path: "sign-up",
        element:<SignUp/>
    },
    {
        path:"login",
        element: <Login/>
    },
    {
        path:"logout",
        element: <Logout/>
    }
]);

export default router;