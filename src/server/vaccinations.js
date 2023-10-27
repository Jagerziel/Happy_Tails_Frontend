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

// Get Vaccinations by Pet ID
export const getVaccinationsByPet = async ( pet_id ) => {
    try {
        const response = await fetch(URL + `pet/${pet_id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Vaccinations Data By Pet failed: ${error}`)
    }
};

// Create a New Vaccination
export const createVaccination = async (input) => {
    try {
        const response = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(input),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await response.json()    
        return data
    } catch (error) {
        console.log(`Create Vaccination failed: ${error}`)   
    }
};


