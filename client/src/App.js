import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../src/component/Main/index";
import Signup from "../src/component/signup/index";
import Login from "../src/component/Login/index";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;