const Student = function(props){
    return(
        <div>
            <h3>Student name:{props.name}</h3>
            <p>Id:{props.id}</p>
            <p>Branch:{props.branch}</p>
            <p>Year:{props.year}</p>
            <p>CGPA:{props.cgpa}</p>
        </div>
    )
}
export default Student;