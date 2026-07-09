import axios from "axios";

const API = axios.create({
    baseURL:
        import.meta.env.VITE_API_URL ||
        "http://localhost:5000/api/users",
});

// Get all users
export const getUsers = () => API.get("/");

// Add user
export const addUser = (userData) => API.post("/", userData);

// Delete user
export const deleteUser = (id) => API.delete(`/${id}`);

// Dashboard stats
export const getStats = () => API.get("/stats");

export default API;