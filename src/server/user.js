import api from "./apiConfig.js";

const URL = api.USER;

// Get All Users
export const getUsers = async () => {
    try {
        const response = await fetch(URL, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Users failed: ${error}`)
    }
};

// Get a Single User by ID
export const getUser = async ( id ) => {
    try {
        const response = await fetch(URL + `/${id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get User failed: ${error}`)
    }
};

// Get a Single User by Email
export const getUserByEmail = async ( email ) => {
    try {
        const response = await fetch(URL + `/email/${email}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get User by Email failed: ${error}`)
    }
};

// Create a New User
export const createUser = async (input) => {
    try {
        const response = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(input),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = response.json()
        return data
    } catch (error) {
        console.log(`Create User failed: ${error}`)   
    }
};

// Update an Existing User
export const updateUser = async (input, id) => {
    try {
        const response = await fetch(URL + `${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input),
        })
        const data = await response.data()
        return data
    } catch (error) {
        console.log(`Update User failed: ${error}`)
    }
};

// Delete a User
export const deleteUser = async (id) => {
    try{
        await fetch(URL + `/${id}`, {
          method: "DELETE",
        })
        return `User id ${id} deleted`
    } catch (error) {
        console.log(`Delete User failed: ${error}`)
    }
};
