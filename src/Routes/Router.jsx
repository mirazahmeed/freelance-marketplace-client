import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AddTask from "../Pages/AddTask";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "/add-task",
				element: <AddTask />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/login",
				element: <Login />,
			},	
		],
	},
]);

export default Router;
