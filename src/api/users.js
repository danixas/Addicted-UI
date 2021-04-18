import axios from "../axiosConfig";

const getUsers = async () => axios.get("/users");

const editUser = async (id, userData) => axios.put(`/users/${id}`, userData);

const addUser = async (userData) => axios.post("/users", userData);

export {
    getUsers,
    editUser,
    addUser,
};
