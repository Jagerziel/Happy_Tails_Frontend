import api from "./apiConfig.js";

const URL = api.APPOINTMENT;

// Get All Appointment
export const getAppointment = async () => {
    try {
        const response = await fetch(URL, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Appointment failed: ${error}`)
    }
};

// Get Apppontments by User ID
export const getAppointmentsByUser = async ( user_id ) => {
    try {
        const response = await fetch(URL + `user/${user_id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Apppontments Data By User failed: ${error}`)
    }
};

// Get Apppontments by Pet ID
export const getAppointmentsByPet = async ( pet_id ) => {
    try {
        const response = await fetch(URL + `pet/${pet_id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Apppontments Data By Pet failed: ${error}`)
    }
};

// Create a New Appointment
export const createAppointment = async (input) => {
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
        console.log(`Create Appointment failed: ${error}`)   
    }
};



