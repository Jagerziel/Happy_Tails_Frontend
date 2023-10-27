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
