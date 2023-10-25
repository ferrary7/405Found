import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import "./LandingPage.css"
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/Signup'
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/register" element={<SignUp />} />
    </Routes>
  )
}

export default App
