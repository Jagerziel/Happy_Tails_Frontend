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

// Get Appointments by User ID
export const getAppointmentsByUser = async ( user_id ) => {
    try {
        const response = await fetch(URL + `user/${user_id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Appointments Data By User failed: ${error}`)
    }
};

// Get Appointments by Pet ID
export const getAppointmentsByPet = async ( pet_id ) => {
    try {
        const response = await fetch(URL + `pet/${pet_id}`, {
            method: "GET",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(`Get Appointments Data By Pet failed: ${error}`)
    }
};

// Create a New Appointment
export const createAppointment = async (input) => {
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
        console.log(`Create Appointment failed: ${error}`)   
    }
};

// Update an Existing Appointment
export const updateAppointment = async (input, id) => {
    try {
        const response = await fetch(URL + `${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input),
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`Update Appointment failed: ${error}`)
    }
};

// Delete a Appointment
export const deleteAppointment = async (id) => {
    try{
        await fetch(URL + `${id}`, {
          method: "DELETE",
        });
        return `Appointment id ${id} deleted`
    } catch (error) {
        console.log(`Delete Appointment failed: ${error}`)
    }
};

// Delete Appointments By User
export const deleteAppointmentsByUser = async (id) => {
    try{
        await fetch(URL + `user/${id}`, {
          method: "DELETE",
        });
        return `Appointments deleted for user id ${id}`
    } catch (error) {
        console.log(`Delete Appointment failed: ${error}`)
    }
};


// Delete Appointments By Pet
export const deleteAppointmentsByPet = async (id) => {
    try{
        await fetch(URL + `pet/${id}`, {
          method: "DELETE",
        });
        return `Appointments deleted for pet id ${id}`
    } catch (error) {
        console.log(`Delete Appointment failed: ${error}`)
    }
};

