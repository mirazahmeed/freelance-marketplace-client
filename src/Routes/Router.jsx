import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{}
		],
	},
]);

export default Router;
