import Layout from "./Layout"
import Login from "./createAccount/Login.jsx"
import Register from "./createAccount/Register.jsx"
import Events from "./createAccount/events.jsx"



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

        {
            path: "/events",
            element:<Events/>,
        }
    
]