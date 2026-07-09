import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/users",
    headers: {
        "Content-Type": "application/json",
    },
});

// ================= USERS =================

// Get all users
export const getUsers = async () => {
    return await API.get("/");
};

// Add user
export const addUser = async (userData) => {
    return await API.post("/", userData);
};

// Delete user
export const deleteUser = async (id) => {
    return await API.delete(`/${id}`);
};

// Dashboard statistics
export const getStats = async () => {
    return await API.get("/stats");
};

export default API;