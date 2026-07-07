import './App.css'
import Navbar from './components/Navbar.jsx'
import InHead from './components/InHead.jsx'
import Student from './components/Student.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx';
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
  return (
    <div className="App">
      
      <Navbar/>
      {/*<p>Learn Today lead Tomorrow</p>*/}
      
      {/*<InHead
           name = "Platform"
           year = {2024}
      />
      <h4>It has a large user base</h4>

      <Student
        name = "Reshma Sri"
        id   = {509}
        branch = "CSE"
        year = {4}
        cgpa = {8.5}
        />*/}
      <div className = 'main'> 
      <Sidebar/>
      <Dashboard/>

      </div>
      
      <Footer/>

     
    </div>
  )
};

export default App