// Import Axios
import axios from "axios";
// Import Routes
import { BACKEND_DB_ROUTE } from '@env'

const PRIMARY_URL = BACKEND_DB_ROUTE;

// Use Axios
const api = axios.create({
    baseURL: PRIMARY_URL,
});
  
// Export API 
export default api;