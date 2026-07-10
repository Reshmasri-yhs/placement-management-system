import { useState } from "react";
import "./login.css";
import Dashboard from "../../components/Dashboard/Dashboard";

function Login({}) {
  const [logged, setLogin] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors,setErrors] = useState({});
  
  
    
function ValidateFields() {
  const newErrors = {};

  
  if (studentName.trim() === "") {
    newErrors.studentName = "Name is required";
  }

     
  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  if (email.trim() === "") {
    newErrors.email = "Email is required";
  } else if (!emailPattern.test(email)) {
    newErrors.email = "Enter a valid email";
  }

  
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (password.trim() === "") {
    newErrors.password = "Password is required";
  } else if (!passwordPattern.test(password)) {
    newErrors.password =
      "Password must contain uppercase, lowercase, number and special character";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
}
        function handleLoading() {
    if (!ValidateFields()){
        setMessage("");
    
      return;
    }
  
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      if (
        studentName === "Reshma" &&
        email === "reshma@gmail.com" &&
        password === "Password@123"
      ) {
        setMessage("Login Successful ");
        setLogin(true);
      } else {
        setMessage("Invalid Username or Password ");
      }

      setLoading(false);
    }, 2000);
  }

  function handleClear() {
    
    setStudentName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setMessage("");
    setErrors({});
  }
  function handleLogout() {
    setLogin(false);
    handleClear();
  }

  function handleForgotPassword() {
    setMessage("A password reset link would be sent to your email.");
  }
  function handleRegisterNavigate() {
    setMessage("Redirecting to Register page...");
  }

  return (
    <>
      {!logged ? (
        <div className="login-container">
          <div className="login-box">
            <h1>Placement Management System</h1>

            <input
              type="text"
              placeholder="Enter Your Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            {errors.studentName && ( <p className="field-error">{errors.studentName}</p>)}

            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="field-error">{errors.Email}</p>}

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="field-error">{errors.Password}</p>}

            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
            
            <div className="button-row">
            <button
              
              className="login-btn"
              onClick={handleLoading}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            
            

            </div>
            <div className="links-row">
            <button 
            type="button"
            className="link-btn"
            onClick={handleForgotPassword}
            >
              Forget Password Mate ?
            </button>

            <button 
            type="button"
            className="link-btn"
            onClick={handleRegisterNavigate}
            >
              New User? Register
            </button>
            </div>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      ) : (

        <>
          <h2 className="welcome">
            Welcome Back, {studentName}!
          </h2>

          <Dashboard />

          <div className="logout-container">
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
            </div>
          
        </>
      )}
    </>
  );
}



export default Login;