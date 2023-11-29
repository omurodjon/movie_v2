import React from 'react';

export function Login() {
	return (
		<form className="container w-50 login">
			{/* <!-- User Name input --> */}
			<div className="form-outline mb-4">
				<input type="email" id="form2Example1" className="form-control logEmail" />
				{/* <label className="form-label" for="form2Example1">Email Address</label> */}
			</div>

			{/* <!-- Password input --> */}
			<div className="form-outline mb-4">
				<input type="password" id="form2Example2" className="form-control logPassword" />
				{/* <label className="form-label" for="form2Example2">Password</label> */}
			</div>

			{/* <!-- 2 column grid layout for inline styling --> */}
			<div className="row mb-4">
				<div className="col d-flex justify-content-center"></div>
			</div>

			{/* <!-- Submit button --> */}
			<button type="button" className="btn btn-primary btn-block mb-4 sing-in">
				Sign in
			</button>
		</form>
	);
}


