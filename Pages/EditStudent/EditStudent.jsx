
import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import API from "../../api/api.js";

function EditStudent(){

const {id}=useParams();

const navigate=useNavigate();

const [student,setStudent]=useState(null);

const [studentName,setStudentName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [branch,setBranch]=useState("");
const [cgpa,setCgpa]=useState("");

const [loading,setLoading]=useState(true);
const [saving,setSaving]=useState(false);
const [error,setError]=useState("");



const fetchStudent=async()=>{

try{

setLoading(true);

const response=await API.get(`/students/${id}`);

const data=response.data.student;

setStudent(data);

setStudentName(data.studentName);
setEmail(data.email);
setPhone(data.phone);
setBranch(data.branch);
setCgpa(data.cgpa);

}

catch(err){

setError(
err.response?.data?.message||
"Student not found"
);

}

finally{

setLoading(false);

}

};



useEffect(()=>{

fetchStudent();

},[]);



const updateStudent=async(e)=>{

e.preventDefault();

try{

setSaving(true);

await API.put(`/students/${id}`,{
studentName,
email,
phone,
branch,
cgpa
});


alert("Student Updated Successfully");

navigate("/students");


}

catch(err){

console.log(err);

setError("Failed to update student");

}

finally{

setSaving(false);

}

};



if(loading)
return <h2 className="loading">Loading Student...</h2>;


return(

<div className="edit-container">

<h2>Edit Student</h2>


{
error&&<p className="error">{error}</p>
}


<form onSubmit={updateStudent}>


<input
value={studentName}
onChange={(e)=>setStudentName(e.target.value)}
placeholder="Student Name"
/>


<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Email"
/>


<input
value={phone}
onChange={(e)=>setPhone(e.target.value)}
placeholder="Phone"
/>


<input
value={branch}
onChange={(e)=>setBranch(e.target.value)}
placeholder="Branch"
/>


<input
value={cgpa}
onChange={(e)=>setCgpa(e.target.value)}
placeholder="CGPA"
/>


<button disabled={saving}>

{
saving?
"Updating..."
:
"Update"
}

</button>


</form>


</div>

);

}

export default EditStudent;