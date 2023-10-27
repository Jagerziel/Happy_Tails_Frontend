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