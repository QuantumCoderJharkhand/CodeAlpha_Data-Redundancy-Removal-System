import axios from "axios";

// Backend URL
const API = axios.create({
    baseURL: "http://localhost:5000/api/users"
});

// Get all users
export const getUsers = () => API.get("/");

// Add new user
export const addUser = (userData) => API.post("/", userData);

// Delete user
export const deleteUser = (id) => API.delete(`/${id}`);

// Dashboard statistics
export const getStats = () => API.get("/stats");

export default API;