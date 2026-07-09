import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";

import {
  getUsers,
  getStats,
  addUser,
  deleteUser
} from "./services/api";

function App() {

  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    unique: 0,
    duplicate: 0,
    falsePositive: 0
  });

  const [search, setSearch] = useState("");

  // Load Users
  const loadUsers = async () => {

    const res = await getUsers();

    setUsers(res.data.data);

  };

  // Load Dashboard Stats
  const loadStats = async () => {

    const res = await getStats();

    setStats(res.data);

  };

  useEffect(() => {

    loadUsers();
    loadStats();

  }, []);

  // Add User
  const handleAdd = async (user) => {

    try {

      await addUser(user);

      loadUsers();
      loadStats();

      alert("User Added Successfully");

    } catch (err) {

      alert(err.response.data.message);

    }

  };

  // Delete User
  const handleDelete = async (id) => {

    await deleteUser(id);

    loadUsers();

    loadStats();

  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div>

      <Navbar />

      <DashboardCards stats={stats} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <UserForm addUser={handleAdd} />

      <UserTable
        users={filteredUsers}
        deleteUser={handleDelete}
      />

    </div>

  );

}

export default App;