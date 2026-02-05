import React from "react";
import { Link } from "react-router";

const Register = () => {
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Register now!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<div className="card-body">
							<fieldset className="fieldset">
								<label className="label">Name</label>
								<input
									type="text"
									className="input"
									placeholder="Name"
								/>
								<label className="label">Email</label>
								<input
									type="email"
									className="input"
									placeholder="Email"
								/>
								<label className="label">Phone Number</label>
								<input
									type="number"
									className="input"
									placeholder="Phone Number"
								/>
								<label className="label">Date of Birth</label>
								<input
									type="date"
									className="input"
									placeholder="Date of Birth"
								/>
								<label className="label">Gender</label>
								<input
									type="text"
									className="input"
									placeholder="Gender"
								/>
								<label className="label">Address</label>
								<input
									type="text"
									className="input"
									placeholder="Address"
								/>
								<label className="label">Bio</label>
								<textarea
									className="textarea h-24"
									placeholder="Explain About Your Self"></textarea>

								<label className="label">Password</label>
								<input
									type="password"
									className="input"
									placeholder="Password"
								/>
								<label className="label">
									Confirm Password
								</label>
								<input
									type="password"
									className="input"
									placeholder="Confirm Password"
								/>
								<div>
									<Link
										to="/login"
										className="link link-hover">
										Already have an account?
									</Link>
								</div>
								<label className="label">
									<input
										type="checkbox"
										defaultChecked
										className="checkbox"
									/>
									Accept Terms and Conditions
								</label>
								<button className="btn btn-neutral mt-4">
									Register
								</button>
							</fieldset>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
