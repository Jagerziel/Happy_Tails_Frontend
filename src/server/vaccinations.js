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

// Update an Existing Vaccination
export const updateVaccination = async (input, id) => {
    try {
        const response = await fetch(URL + `${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input),
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`Update Vaccination failed: ${error}`)
    }
};


// Delete a Vaccination
export const deleteVaccination = async (id) => {
    try{
        await fetch(URL + `${id}`, {
          method: "DELETE",
        });
        return `Vaccination id ${id} deleted`
    } catch (error) {
        console.log(`Delete Vaccination failed: ${error}`)
    }
};

// Delete Vaccinations By User
export const deleteVaccinationsByUser = async (id) => {
    try{
        await fetch(URL + `user/${id}`, {
          method: "DELETE",
        });
        return `Vaccinations deleted for user id ${id}`
    } catch (error) {
        console.log(`Delete Appointment failed: ${error}`)
    }
};

// Delete Vaccinations By Pet
export const deleteVaccinationsByPet = async (id) => {
    try{
        await fetch(URL + `pet/${id}`, {
          method: "DELETE",
        });
        return `Vaccinations deleted for pet id ${id}`
    } catch (error) {
        console.log(`Delete Appointment failed: ${error}`)
    }
};


