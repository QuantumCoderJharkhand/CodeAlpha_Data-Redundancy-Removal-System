function UserTable({ users, deleteUser }) {

    return (

        <div className="table-container">

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Phone</th>

                        <th>Status</th>

                        <th>Confidence</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr key={user._id}>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.phone}</td>

                            <td>

                                <span className={`badge ${user.status.toLowerCase().replace(/\s+/g, "-")}`}>
                                    {user.status}
                                </span>

                            </td>

                            <td>{user.confidence}%</td>

                            <td>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteUser(user._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default UserTable;