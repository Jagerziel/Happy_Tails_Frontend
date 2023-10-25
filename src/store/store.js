import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import userDataReducer from "./reducers/userDataReducer";
import petDataReducer from "./reducers/petDataReducer";
import appointmentDataReducer from "./reducers/appointmentDataReducer";
import vaccinationsDataReducer from "./reducers/vaccinationsDataReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: userDataReducer,
    petData: petDataReducer,
    appointmentData: appointmentDataReducer,
    vaccinationsData: vaccinationsDataReducer,
  },
});
