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



