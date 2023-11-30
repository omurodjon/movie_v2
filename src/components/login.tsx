import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:4000/api/auth", {
      email,
      password,
    });

    console.log("data: ", data);
    console.log(email, password);

    navigate("/");
  }

  return (
    <form className="container w-50 login" onSubmit={handleSubmit}>
      <h1>Log In</h1>
      {/* <!-- User Name input --> */}
      <div className="form-outline mb-4">
        <span>Email:</span>
        <input
          type="email"
          id="form2Example1"
          className="form-control logEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <span>Password:</span>
        <input
          type="password"
          id="form2Example2"
          className="form-control logPassword"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4 sing-in">
        Sign in
      </button>
    </form>
  );
}
