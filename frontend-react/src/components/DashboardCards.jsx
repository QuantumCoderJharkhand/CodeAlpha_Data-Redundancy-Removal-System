import { FaDatabase, FaCheckCircle, FaCopy, FaExclamationTriangle } from "react-icons/fa";

function DashboardCards({ stats }) {
    return (
        <div className="container mt-4">
            <div className="cards">

                <div className="card total animate__animated animate__fadeInUp">
                    <FaDatabase size={40} />
                    <h2>{stats.total}</h2>
                    <p>Total Records</p>
                </div>

                <div className="card unique animate__animated animate__fadeInUp">
                    <FaCheckCircle size={40} />
                    <h2>{stats.unique}</h2>
                    <p>Unique Records</p>
                </div>

                <div className="card duplicate animate__animated animate__fadeInUp">
                    <FaCopy size={40} />
                    <h2>{stats.duplicate}</h2>
                    <p>Duplicate Records</p>
                </div>

                <div className="card false animate__animated animate__fadeInUp">
                    <FaExclamationTriangle size={40} />
                    <h2>{stats.falsePositive}</h2>
                    <p>False Positive</p>
                </div>

            </div>
        </div>
    );
}

export default DashboardCards;