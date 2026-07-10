import StudentTable from "../../components/StudentTable/StudentTable";
import { useState } from "react";

function Students(){
    const students = [
        {
            id:1,
            name:"Rahul",
            email:"rahul@gmail.com",
            branch:"cse",
            cgpa:8
        },
    
        {
            id:2,
            name:"Reshma",
            email:"reshma@gmail.com",
            branch:"cse",
            cgpa:9
        }
    ]
    return(
        <>
        <h1>Student Management</h1>
        <p>Manage all registered students here</p>
        <Link to= "/Register">
            <button>
                Add New Student
            </button>
        </Link>
        <StudentTable students={students}/>
        </>
    )
}
export default Students;