import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Error from './pages/Error/Error'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Profile />} />
				<Route path="/user/:userId" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	)
}

export default App
