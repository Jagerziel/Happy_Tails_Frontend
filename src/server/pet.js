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

// Get Pets by a User ID
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

// Create a New Pet
export const createPet = async (input) => {
    try {
        await fetch(URL, {
          method: "POST",
          body: JSON.stringify(input),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(input)
    } catch (error) {
        console.log(`Create Pet failed: ${error}`)   
    }
};

// Update an Existing Pet
export const updatePet = async (input, id) => {
    try {
        await fetch(URL + `${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input),
        });
    } catch (error) {
        console.log(`Update Pet failed: ${error}`)
    }
};

// Delete a Pet
export const deletePet = async (id) => {
    try{
        await fetch(URL + `${id}`, {
          method: "DELETE",
        });
    } catch (error) {
        console.log(`Delete Pet failed: ${error}`)
    }
};

