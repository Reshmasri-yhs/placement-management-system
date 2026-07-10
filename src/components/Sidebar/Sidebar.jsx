
import './Sidebar.css'
const Sidebar = function() {
    return(
        <div className="Sidebar">
        
        <ul>
            <Navlink to ="/login"
            className={({isActive})=>
            isActive ? "active":""
            }>
            <li>Login</li>
            </Navlink>

            <link to = "/Dashboard">
            <li>Dashboard</li>
            </link>

            <link to = "/Home">
            <li>Home</li>
            </link>

            <link to = "/Students">
            <li>Students</li>
            </link>

            <link to = "/Companies">
            <li>Companies</li>
            </link>

            <link to = "/Placements">
            <li>Placements</li>
            </link>
            
            <link to = "/Reports">
            <li>Reports</li>
            </link>
            

            <link to = "/Settings">
            <li>Settings</li>
            </link>
           

            <link to = "/Logout">
            <li>Logout</li>
            </link>
            
            
        </ul>
        
        </div>

    )
};
export default Sidebar;
