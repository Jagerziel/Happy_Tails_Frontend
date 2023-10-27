// Server Requests
import { getUser } from "./user.js"
import { getPetsByUser } from "./pet.js"
import { getAppointmentsByUser } from "./appointment.js"
import { getVaccinationsByUser } from "./vaccinations.js"

// State Management
import { useSelector, useDispatch } from "react-redux";


export async function loadUser(id) {
    const data = {
        user: {},
        pet: [],
        appointment: [],
        vaccinations: []
    }
    data.user = await getUser(id) // Returns user object
    data.pet = await getPetsByUser(id) // Returns pets array
    data.appointment = await getAppointmentsByUser(id) // Returns appointments array
    data.vaccinations = await getVaccinationsByUser(id) // Returns vaccinations array
    


    return data
}