import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes as Switch, useNavigate } from 'react-router-dom';
export function Register() {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(event: any) {
		event.preventDefault();
		const { data } = await axios.post('http://localhost:4000/api/users', {
			name,
			email,
			password,
		});

		console.log('data: ', data);
		console.log(name, email, password);

		navigate('/login');
	}

	return (
		<form className="container w-50 login" onSubmit={handleSubmit}>
			<h1>Register</h1>
			{/* <!-- Email input --> */}
			<div className="form-outline mb-4">
				<span>Email:</span>
				<input
					type="email"
					id="form2Example1"
					className="form-control logEmail"
					onChange={(event) => setEmail(event.target.value)}
				/>
			</div>

			{/* <!-- UserName input --> */}
			<span>Username:</span>
			<div className="form-outline mb-4">
				<input
					type="text"
					id="form2Example2"
					className="form-control logName"
					onChange={(event) => setName(event.target.value)}
				/>
			</div>

			{/* <!-- Password input --> */}
			<div className="form-outline mb-4">
				<span>Password:</span>
				<input
					type="password"
					id="form2Example3"
					className="form-control logPassword"
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>

			{/* <!-- Submit button --> */}
			<button type="submit" className="btn btn-primary btn-block mb-4 sing-in">
				Sign in
			</button>
		</form>
	);
}
