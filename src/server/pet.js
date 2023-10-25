import api from "./apiConfig.js";

const URL = api.PET;

// Get All Pets
export const getPets = async () => {
    try {
        const response = await fetch(URL, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Pets failed: ${error}`)
    }
};

// Get a Single User by ID
export const getPetsByUser = async ( user_id ) => {
    try {
        const response = await fetch(URL + `user/${user_id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Pet Data By User failed: ${error}`)
    }
};


