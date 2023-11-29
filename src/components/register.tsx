import React from 'react';

export function Register() {
	return (
		<form className="container w-50 login">
			<h1>Register</h1>
			{/* <!-- User Name input --> */}
			<div className="form-outline mb-4">
				<span>Email:</span>
				<input type="email" id="form2Example1" className="form-control logEmail" />
			</div>

			{/* <!-- UserName input --> */}
			<span>Username:</span>
			<div className="form-outline mb-4">
				<input type="text" id="form2Example2" className="form-control logName" />
			</div>

			{/* <!-- Password input --> */}
			<div className="form-outline mb-4">
				<span>Password:</span>
				<input type="password" id="form2Example2" className="form-control logPassword" />
			</div>

			{/* <!-- Submit button --> */}
			<button type="button" className="btn btn-primary btn-block mb-4 sing-in">
				Sign in
			</button>
		</form>
	);
}
