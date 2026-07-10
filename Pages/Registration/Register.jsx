import { useState } from "react";
import "./Register.css";
import StudentTable from "../../components/StudentTable/StudentTable";

function Register() {
    const [studentName, setStudentName] = useState("");
    const [password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Branch,setBranch] = useState("");
    const [Cgpa, setCgpa] = useState("");
    const [errors,setErrors] = useState({});
    const [students,setStudents] = useState([]);
    

    function registerStudent(event){
        event.preventDefault()

        const validationErrors = {};

        if(studentName.trim()===""){
            validationErrors.studentName ="Name is Required";
            
        }
         const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(password.trim()===""){
            validationErrors.password = "Password is required";
            
        }else  {
        if (!passwordPattern.test(password)) {
        validationErrors.password ="Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character";
       
        }
        }

        //email validation
        //regex:regular expressions
        const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(Email.trim()===""){
        validationErrors.email = "Email is required";
        } else {    
        if(!emailpattern.test(Email)){
         validationErrors.email = "Enter a valid email";
        }
        }

        if(Branch.trim()===""){
           validationErrors.branch = "Branch is required";

        }
        if (Phone.trim() === "") {
      validationErrors.phone = "Phone number is required";
    } else {
      const phonePattern = /^[0-9]{10}$/;

      if (!phonePattern.test(Phone)) {
        validationErrors.phone = "Phone number must be exactly 10 digits";
      }
    }  

        if(Cgpa.trim()===""){
            validationErrors.cgpa  = "CGPA is required";
        }
       setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
           

        const newStudent = { 
            studentName,
            email : Email,
            phone : Phone,
            branch : Branch,
            cgpa : Cgpa
        };

        

        setStudents([...students, newStudent]);

        console.log("Registration Successful", students);
        setStudentName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setBranch("");
        setCgpa("");
        }
        
    }
    return (
        <div className= "register-container">
            
            <h1>Registration Page</h1>
            <form onSubmit={registerStudent}>
           
            <input
                type="text"
                placeholder="Enter username"
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
            />
            {errors.studentName && <p className="error">{errors.studentName}</p>}
            <br/>
            
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            
            <input 
                type = "Email"
                placeholder= "Enter Email"
                value={Email}
                onChange ={(e)=>setEmail(e.target.value)}
                />
            {errors.email && <p className="error">{errors.email}</p>}
            
            <input
                type = "text"
                placeholder = "Enter Branch"
                value={Branch}
                onChange ={(e)=>setBranch(e.target.value)}
                />
             {errors.branch && <p className="error">{errors.branch}</p>}   
            
            <input
                type = "tel"
                placeholder = "Enter Phone Number"
                value={Phone}
                onChange ={(e)=>setPhone(e.target.value)}
                />
            {errors.phone  && <p className="error">{errors.phone}</p>}

            <input
                type = "number"
                placeholder = "Enter Cgpa"
                value={Cgpa}
                onChange ={(e)=>setCgpa(e.target.value)}
                />
                {errors.cgpa && <p className="error">{errors.cgpa}</p>}

            <button type="submit">Register</button>
        
            
            </form>
            {/*{students.map((student, index) => (
            <div  key={index}>
            <h2>student details</h2>
            
            <p>Student.Name</p>
            <p>Student.Password</p>
            <p>Student.Email</p>
            <p>Student.Phone</p>
            <p>Student.Branch</p>
            <p>Student.cgpa</p>
            </div>
            ))
        }*/}
        
        <StudentTable students={students}/>
        </div>
    );
} 

              
export default Register;