import api from "./apiConfig.js";

const URL = api.USER;

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

export const createUser = async (input) => {
    try {
        await fetch(URL, {
          method: "POST",
          body: JSON.stringify(input),
        });
    } catch (error) {
        console.log(`Create User failed: ${error}`)   
    }
};

export const updateUser = async (input, id) => {
    try {
        await fetch(URL + `/${id}`, {
            method: "PUT",
            body: JSON.stringify(input),
        });
    } catch (error) {
        console.log(`Update User failed: ${error}`)
    }
};

export const deleteUser = async (id) => {
    try{
        await fetch(URL + `/${id}`, {
          method: "DELETE",
        });
    } catch (error) {
        console.log(`Delete User failed: ${error}`)
    }
};
