import './Dashboard.css';
import { useState } from 'react';

function Dashboard({ onWelcomeClick }) {
    const [totalStudents, setTotalStudents] = useState(250);
    const [companies, setCompanies] = useState(35);
    const [placed, setPlaced] = useState(100);
    const [pending, setPending] = useState(150);
    //Hooks with string
    const [name, setName] = useState("Rahul");
    //hooks with boolean
    const[login,setLogin] = useState(false);
    //hooks with arrays
    const[students,setStudents] = useState([]);
    const[restStudent,setResetStudent] = useState(250)
    
    function increaseStudents() {
        setTotalStudents(totalStudents + 1);
    }

    function increaseCompanies() {
        setCompanies(companies + 1);
    }

    function increasePlaced() {
        setPlaced(placed + 1);
        setPending(pending - 1);
    }

    function increasePending() {
        setPending(pending + 1);
    }

    function changeName() {
        setName("Reshma");
    }
    
    function addStudent(){
        setStudents([
            "Rahul",
            "Ravi",
            "Lily"
        ]);
    }
    return (
        <div className="main-content">
            <div className="welcome" onClick={onWelcomeClick}>
                <h3>Welcome Back!{name}</h3>
                <button onClick={changeName}>Reshma</button>
            </div>
        
            <div className="cards">
                <div className="card">
                    <h2>{totalStudents}</h2>
                    <button onClick={increaseStudents}>Add Student</button>
                    <button onClick={() => setTotalStudents(250)}>Reset Student</button>
                    <p>Total Students</p>
                </div>
                <div className="card">
                    <h2>{companies}</h2>
                    <button onClick={increaseCompanies}>Companies</button>
                    <p>Companies</p>
                </div>
                <div className="card">
                    <h2>{placed}</h2>
                    <button onClick={increasePlaced}>Placed</button>
                    <p>Placed</p>
                </div>
                <div className="card">
                    <h2>{pending}</h2>
                    <button onClick={increasePending}>Pending</button>
               
                    <p>Pending</p>
                    <p>{students.join(', ')}</p>
                                        <button onClick={addStudent}>Students</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
export default Dashboard;
