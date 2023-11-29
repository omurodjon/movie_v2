import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Navigate, Link } from 'react-router-dom';
export function Register() {
	function showInput(event: any) {
		let inputValue = event.target.value;
		console.log(inputValue);
	}

	return (
		<form className="container w-50 login">
			<h1>Register</h1>
			{/* <!-- User Name input --> */}
			<div className="form-outline mb-4">
				<span>Email:</span>
				<input
					type="email"
					id="form2Example1"
					className="form-control logEmail"
					onInput={showInput}
				/>
			</div>

			{/* <!-- UserName input --> */}
			<span>Username:</span>
			<div className="form-outline mb-4">
				<input
					type="text"
					id="form2Example2"
					className="form-control logName"
					onInput={showInput}
				/>
			</div>

			{/* <!-- Password input --> */}
			<div className="form-outline mb-4">
				<span>Password:</span>
				<input
					type="password"
					id="form2Example2"
					className="form-control logPassword"
					onInput={showInput}
				/>
			</div>

			{/* <!-- Submit button --> */}
			<button type="button" className="btn btn-primary btn-block mb-4 sing-in">
				Sign in
			</button>
		</form>
	);
}
