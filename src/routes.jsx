import Layout from "./createAccount/Layout.jsx"
import Login from "./createAccount/Login.jsx"
import Register from "./createAccount/Register.jsx"
import Events from "./createAccount/events.jsx"
import AllTask from "./createAccount/allTask.jsx"
import CompletedTask from "./createAccount/completedTask.jsx"
import PendingTask from "./createAccount/pendingTask.jsx"
import CancelledTask from "./createAccount/cancelledTask.jsx"
import Main from "./createAccount/Main.jsx"
import CreateTask from "./createAccount/createTask.jsx"



export const Routes =[
    {
        path: "/",
        element:<Layout/>,
       children:[ {
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
        {
            path: "/events",
            element:<Events/>,
        },
        {
            path: "/completedTask",
            element:<Events/>,
        },
    
        {
            path: "/pendingTask",
            element:<Events/>,
        },
    
        {
            path: "/allTask",
            element:<Events/>,
        },
        {
            path: "/cancelledTask",
            element:<Events/>,
        },
        {
            path:"/createTask",
            element:<CreateTask/>,
        }
       ]
      
    },
    
]
