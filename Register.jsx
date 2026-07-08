import { useState } from "react";
import "./Register.css";

function Register() {
    const [studentName, setStudentName] = useState("");
    const [password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Branch,setBranch] = useState("");
    const [Cgpa, setCgpa] = useState("");
    const [errors,setErrors] = useState("");
    const validationErrors = {};

    function registerStudent(event){
        event.preventDefault()
        if(studentName.trim()===""){
            validationErrors.studentName ="Name is Required";
            return;
        }
        if(password.trim()===""){
            validationErrors.password = "Password is required";
            return;
        }else{
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
        validationErrors.password ="Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character";
        return;
        }
        }
        //email validation
        //regex:regular expressions
        if(Email.trim()===""){
        validationErrors.Email = "Email is required";
        } else {    
        const emailpattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        if(!emailpattern.test(email)){
         alert("Enter a valid mail");
        return;
        }
        }
        if(Branch.trim()===""){
            alert("Branch is required")
            return;
        }
        if(Phone.trim()===""){
            alert("Phone is required")
            return;
        }
        if(Cgpa.trim()===""){
            alert("Cgpa is required")
            return;
        }
        const student ={
            studentName,
            Email,
            phone,
            branch,
            cgpa
            };
            console.log(student);
        console.log("Registration Successful")
        
    }
    return (
        <div className= "register-container">
            
            <h1>Registration Page</h1>
            <form onSubmit={registerStudent}>
            <h2>{studentName}</h2>
            <input
                type="text"
                placeholder="Enter username"
                onChange={(event) => setStudentName(event.target.value)}
            />
            <br/>
            <h2>{password}</h2>
            <input
                type="password"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <h2>{Email}</h2>
            <input 
                type = "Email"
                placeholder= "Enter Email"
                onChange ={(e)=>setEmail(e.target.value)}
                />
            <h2>{Branch}</h2>
            <input
                type = "text"
                placeholder = "Enter Branch"
                onChange ={(e)=>setBranch(e.target.value)}
                />
            <h2>{Phone}</h2>
            <input
                type = "tel"
                placeholder = "Enter Phone Number"
                onChange ={(e)=>setPhone(e.target.value)}
                />
            <h2>{Cgpa}</h2>
            <input
                type = "number"
                placeholder = "Enter Cgpa"
                onChange ={(e)=>setCgpa(e.target.value)}
                />
            <button>Register</button>
            
            </form>
            <h2>student details</h2>
            
            <p>StudentName:{studentName}</p>
            <p>Email:{Email}</p>
            <p>Phone:{Phone}</p>
            <p>Branch:{Branch}</p>
            <p>Cgpa:{Cgpa}</p>
            
            
        </div>
        

    );
}


export default Register;