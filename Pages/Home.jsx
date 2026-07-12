import { useState } from "react"
import Dashboard from "../components/Dashboard/Dashboard.jsx"
import Register from "./Registration/Register.jsx"

function Home() {
    const [showRegister, setShowRegister] = useState(false)

    return (
        <div>
            {
                showRegister ? (
                    <Register />
                ) : (
                    <Dashboard onWelcomeClick={() => setShowRegister(true)} />
                )
            }
        </div>
    )
}

export default Home
