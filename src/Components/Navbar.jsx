import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { Link, NavLink } from "react-router";

const Navbar = () => {
	return (
		<div>
			<div className="navbar bg-base-100 shadow-sm">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<NavLink>Home</NavLink>
							<li>
								<NavLink>Browse Tasks</NavLink>
								<ul className="p-2">
									<li>
										<NavLink>Looking for Task</NavLink>
									</li>
									<li>
										<NavLink>My Posted Tasks</NavLink>
									</li>
								</ul>
							</li>
							<NavLink to="/add-task">Add Task</NavLink>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">TaskMint</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<NavLink>Home</NavLink>
						</li>
						<li>
							<details>
								<summary>Browse Tasks</summary>
								<ul className="p-2 bg-base-100 w-40 z-1">
									<li>
										<NavLink>Looking for Task</NavLink>
									</li>
									<li>
										<NavLink>My Posted Tasks</NavLink>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<NavLink to="/add-task">Add Task</NavLink>
						</li>
					</ul>
				</div>

				{/* Cart */}
				<div className="navbar-end gap-2">
					{/* message */}
					<div className="dropdown dropdown-end">
						<div className="flex items-center gap-2">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle">
								<div className="indicator">
									<LuMessageSquare
										className="font-bold"
										size={24}
									/>

									<span className="badge badge-sm indicator-item">
										4
									</span>
								</div>
							</div>
						</div>

						<div
							tabIndex={0}
							className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
							<div className="card-body">
								<div className=" bg-neutral text-neutral-content">
									<a className="text-lg">daisyUI</a>
								</div>

								<div className=" bg-base-300">
									<a className="text-lg">daisyUI</a>
								</div>

								<div className=" bg-primary text-primary-content">
									<a className="text-lg">daisyUI</a>
								</div>
							</div>
						</div>
					</div>
					{/* notification */}
					<div className="dropdown dropdown-end">
						<div className="flex items-center gap-2">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle">
								<div className="indicator">
									<IoIosNotificationsOutline
										className="font-bold"
										size={24}
									/>

									<span className="badge badge-sm indicator-item">
										4
									</span>
								</div>
							</div>
						</div>

						<div
							tabIndex={0}
							className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
							<div className="card-body">
								<span className="text-lg font-bold">
									4 Items
								</span>
								<span className="text-info">
									Subtotal: $999
								</span>
								<div className="card-actions">
									<button className="btn btn-primary btn-block">
										View cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<Link to="/register">Register</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
