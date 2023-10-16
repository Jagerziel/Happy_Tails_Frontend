import api from "./apiConfig";

api = api + 'user/';

// Exports all users
export const getUsers = async () => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Exports a user
  export const getUser = async (id) => {
    try {
      const response = await api.get(`${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Creates user
  export const createUser = async (UserData) => {
    try {
      const response = await api.post("/", UserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Updates user
  export const updateUser = async (id, UserData) => {
    try {
      const response = await api.put(`${id}/`, UserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Deletes user
  export const deleteUser = async (id) => {
    try {
      const response = await api.delete(`${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };