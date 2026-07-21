import "./login.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaEye,FaEyeSlash} from "react-icons/fa";
import {GoogleLogin} from "@react-oauth/google";
import API from "../../api/api.js";

function Login(){

const navigate=useNavigate();

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[showPassword,setShowPassword]=useState(false);
const[message,setMessage]=useState("");
const[loading,setLoading]=useState(false);
const[errors,setErrors]=useState({});

const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateFields=()=>{

const newErrors={};

if(!email.trim()) newErrors.email="Email is required";
else if(!emailPattern.test(email)) newErrors.email="Enter valid email";

if(!password.trim()) newErrors.password="Password is required";
else if(password.length<8) newErrors.password="Password must contain minimum 8 characters";

setErrors(newErrors);

return Object.keys(newErrors).length===0;

};

const handleLogin=async(e)=>{

e.preventDefault();

if(!validateFields()){
setMessage("");
return;
}

try{

setLoading(true);
setMessage("");

const response=await API.post("/users/login",{email,password});

localStorage.setItem("loggedUser",JSON.stringify(response.data.user));

setMessage("Login Successful");

setTimeout(()=>navigate("/"),1000);

}catch(error){

console.log(error);

setMessage(error.response?.data?.message||"Login failed");

}finally{

setLoading(false);

}

};

const handleGoogleLogin=async(res)=>{

try{

setLoading(true);
setMessage("");

const response=await API.post("/users/google-login",{
token:res.credential
});

localStorage.setItem("loggedUser",JSON.stringify(response.data.user));

setMessage("Google Login Successful");

setTimeout(()=>navigate("/"),1000);

}catch(error){

console.log(error);

setMessage(error.response?.data?.message||"Google Login Failed");

}finally{

setLoading(false);

}

};

return(

<div className="login-container">

<div className="login-box">

<h2>Good to see you!!</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Enter Your Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

{errors.email&&<p className="field-error">{errors.email}</p>}

<div className="password-wrapper">

<input
type={showPassword?"text":"password"}
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<span
className="eye-icon"
onClick={()=>setShowPassword(!showPassword)}
>
{showPassword?<FaEyeSlash/>:<FaEye/>}
</span>

</div>

{errors.password&&<p className="field-error">{errors.password}</p>}

<div className="button-row">

<button
className="login-btn"
disabled={loading}
>
{loading?"Logging in...":"Login"}
</button>

<button
type="button"
className="clear-btn"
onClick={()=>{
setEmail("");
setPassword("");
setErrors({});
setMessage("");
setShowPassword(false);
}}
>
Clear
</button>

</div>

<div className="links-row">

<button
type="button"
className="link-btn"
onClick={()=>setMessage("Password reset link will be sent to your email.")}
>
Forgot Password?
</button>

<p
className="register-link"
onClick={()=>navigate("/register")}
>
New user? Register
</p>

</div>

<div className="google-login">

<GoogleLogin
onSuccess={handleGoogleLogin}
onError={()=>console.log("Google Login Failed")}
/>

</div>

{message&&<p className="message">{message}</p>}

</form>

</div>

</div>

);

}

export default Login;
