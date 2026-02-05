import React from "react";

const AddTask = () => {
	const handleAddTask = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const newTask = Object.fromEntries(formData.entries());
		console.log(newTask);
		fetch("http://localhost:3000/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then((data) => console.log("after adding task", data));
	};
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<h2 className="text-2xl font-bold text-center">
						Post a Task
					</h2>
					<div className="card-body">
						<form
							className="fieldset grid grid-cols-12 gap-6"
							onSubmit={handleAddTask}>
							<div className="col-span-6">
								<label className="label">Task Title</label>
								<input
									type="text"
									className="input"
									name="taskTitle"
									placeholder="Task Title"
									defaultValue={"Task Title"}
								/>
							</div>
							<div className="col-span-6">
								<label className="label">Task Category</label>
								<input
									type="text"
									className="input"
									name="taskCategory"
									placeholder="Task Category"
									defaultValue={"Task Category"}
								/>
							</div>
							<div className="col-span-12">
								<legend className="fieldset-legend">
									Task Description
								</legend>
								<textarea
									className="textarea h-24"
									name="taskDescription"
									placeholder="Task Description"></textarea>
								<div className="label"></div>
							</div>

							<div className="col-span-6">
								<label className="label">Task Budget</label>
								<input
									type="text"
									className="input"
									name="taskBudget"
									placeholder="Task Budget"
									defaultValue={"Task Budget"}
								/>
							</div>
							<div className="col-span-6">
								<label className="label">Task Deadline</label>
								<input
									type="date"
									className="input"
									name="taskDeadline"
									placeholder="Task Deadline"
									defaultValue={"Task Deadline"}
								/>
							</div>
							<input
								type="submit"
								value="Post Task"
								className="btn btn-neutral mt-4 col-span-12"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTask;
