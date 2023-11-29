import React from 'react';

export function Login() {
	function showInput(event: any) {
		let inputValue = event.target.value;
		console.log(inputValue);
	}
	return (
		<form className="container w-50 login">
			<h1>Log In</h1>
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
