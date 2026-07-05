import axios from "axios";

const BASE_URL = "http://localhost:8088";

export const loginUser = (user) => {
  return axios.post("http://localhost:8088/users/login", user);
};
export const registerUser = (user) => {
    return axios.post(BASE_URL + "/users/register", user);
};
export const getAllProducts = () => {
    return axios.get("http://localhost:8088/products");
};
export const addProduct = (product) => {
    return axios.post("http://localhost:8088/products", product);
};
export const deleteProduct = (id) => {
  return axios.delete("http://localhost:8088/products/" + id);
};
export const getProductById = (id) => {
    return axios.get("http://localhost:8088/products/" + id);
};

export const updateProduct = (product) => {
    return axios.put("http://localhost:8088/products", product);
};
export const getAllSuppliers = () => {
  return axios.get("http://localhost:8088/suppliers");
};

export const deleteSupplier = (id) => {
  return axios.delete("http://localhost:8088/suppliers/" + id);
};
export const addSupplier = (supplier) => {
  return axios.post("http://localhost:8088/suppliers", supplier);
};
export const getSupplierById = (id) => {
    return axios.get("http://localhost:8088/suppliers/" + id);
};

export const updateSupplier = (supplier) => {
    return axios.put("http://localhost:8088/suppliers", supplier);
};
export const getAllInventory = () => {
    return axios.get("http://localhost:8088/inventory");
};

export const deleteInventory = (id) => {
    return axios.delete("http://localhost:8088/inventory/" + id);
};
export const addInventory = (inventory) => {
    return axios.post("http://localhost:8088/inventory", inventory);
};
export const resetPassword = (data) => {
    return axios.put("http://localhost:8088/users/reset-password", data);
};
export const sendOtp = (data) => {
  return axios.post("http://localhost:8088/users/send-otp", data);
};

export const verifyOtp = (data) => {
  return axios.post("http://localhost:8088/users/verify-otp", data);
};
export const getInventoryById = (id) => {
  return axios.get("http://localhost:8088/inventory/" + id);
};

export const updateInventory = (inventory) => {
  return axios.put("http://localhost:8088/inventory", inventory);
};