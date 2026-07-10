function StudentTable({students}){

    return(
        
            <div>
            {
            students.length==0?(
            <h3>No Students Registered</h3>
            ):(
            <table border ="1">
            
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Branch</th>
                        <th>CGPA</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    
                    {students.map((student,index) =>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.studentName}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.branch}</td>
                            <td>{student.cgpa}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
               ) }
               </div>
        
                
    );
}


export default StudentTable;