import api from "./apiConfig.js";

const URL = api.VACCINATIONS;

// Get All Vaccinations
export const getVaccinations = async () => {
    try {
        const response = await fetch(URL, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Vaccinations failed: ${error}`)
    }
};

// Get Vaccinations by User ID
export const getVaccinationsByUser = async ( user_id ) => {
    try {
        const response = await fetch(URL + `user/${user_id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Vaccinations Data By User failed: ${error}`)
    }
};

