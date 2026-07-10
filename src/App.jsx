import './App.css'
import Navbar from './components/Navbar.jsx'
import InHead from './components/InHead.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './Pages/login/login.jsx'
import Home from './Pages/Home.jsx'
import Register from './Pages/Registration/Register.jsx'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Layout from './components/Layouts/Layout.jsx'
import Student from './Pages/Students/Student.jsx'
//App.jsx the root compnent
//initially everything is displayed from here
//creating a root component
//js --HTML -->JSX
//JSX -- browser
//Babel ==>help to convert JSX to JS
//const div=    //fragment
//  <>
//  <h1>Welcome to Chalapathi</h1>
//<p>Learn Today lead Tomorrow</p>
// </>
function App() {
  //const [count,setCount] = useState(250)
  //function addStudent(){
    //setCount(count+1)
    //console.log(count)
  //}
  return (
   
 <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/Register" element = {<Register/>}/>
      
      <Route path="/Layout"element={<Layout/>}>
      <Route path="/Home"element={<Home/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      </Route>

    </Routes>
  
      {/*
         <h1>{count}</h1> */}

{/* <button onClick={addStudent}>Add Student</button> */}

{/* <p>Learn Today Lead Tomorrow</p> */}

{/*
<InHead
  name="Platform"
  year={2024}
/>
*/}

{/*
<h4>It has a large user base</h4>
*/}

{/*
<Student
  name="Reshma Sri"
  id={509}
  branch="CSE"
  year={4}
  cgpa={8.5}
/>
*/}
</>
)     
  
}

export default App;
