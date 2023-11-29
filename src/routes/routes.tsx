import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Login } from '../components/login';
import { Register } from '../components/register';
import App from '../App';
const Routes = () => (
	<Router>
		<Switch>
			<Route index element={<App />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Switch>
	</Router>
);

export default Routes;
