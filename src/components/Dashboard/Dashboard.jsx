import './Dashboard.css';

const Dashboard = function() {
    return (
        <div className="main-content">
            <div className="welcome">
                <h3>Welcome Back!</h3>
            </div>

            <div className="cards">
                <div className="card">
                    <h2>250</h2>
                    <p>Total Students</p>
                </div>
                <div className="card">
                    <h2>35</h2>
                    <p>Companies</p>
                </div>
                <div className="card">
                    <h2>160</h2>
                    <p>Placed</p>
                </div>
                <div className="card">
                    <h2>90</h2>
                    <p>Pending</p>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;