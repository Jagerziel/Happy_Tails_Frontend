// Import Axios
import axios from "axios";
// Import Routes
import { BACKEND_DB_ROUTE } from "@env";

// Use Axios
const api = {
  PRIMARY_URL: BACKEND_DB_ROUTE,
  USER: BACKEND_DB_ROUTE + "user/",
  PET: BACKEND_DB_ROUTE + "pet/",
  APPOINTMENT: BACKEND_DB_ROUTE + "appointment/",
  VACCINATIONS: BACKEND_DB_ROUTE + "vaccinations/",
};

// Export API
export default api;
