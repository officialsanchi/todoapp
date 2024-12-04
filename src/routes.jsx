import Layout from "./Layout"
import Login from "./createAccount/Login.jsx"
import Register from "./createAccount/Register.jsx"



export const Routes = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/register",
        element:<Register/>,
    },
        // path: "/",
        // element: <Layout/>,
        // children: [
           
            

        // ]
    
]