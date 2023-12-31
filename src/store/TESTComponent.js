import { Button, Text, View } from "react-native";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./reducers/counter";
import { updateUserData } from "./reducers/userDataReducer";

import { getPets, getPetsByUser, createPet, updatePet, deletePet } from "../server/pet.js";
import { getAppointment, getAppointmentsByUser, getAppointmentsByPet, createAppointment, updateAppointment, deleteAppointment } from "../server/appointment.js";
import { getVaccinations, getVaccinationsByUser, getVaccinationsByPet, createVaccination, updateVaccination, deleteVaccination } from "../server/vaccinations.js";
import { loadUser } from "../server/loadUser.js";
import ToggleButtonCustom from "../components/shared/ToggleButtonCustom.js";

export function TESTComponent() {
  // const count = useSelector((state) => state.counter.value) //Shorthand
  const count = useSelector((state) => state.counter.count); //Other Method to target specific value
  const userData = useSelector((state) => state.userData.data);
  const petData = useSelector((state) => state.petData.data);
  const vaccinationsData = useSelector((state) => state.vaccinationsData.data);
  const appointmentData = useSelector((state) => state.appointmentData.data);
  const dispatch = useDispatch();
  // console.log(userData);

  async function getData () {
    /* SUCCESSFULLY TESTED*/
    // const data = await getPets() 
    // const data = await getPetsByUser("6539503228bb6c8cbc5e42d4")
    // const data = await createPet(
    //     {
    //         "name": "Test Dog",
    //         "type": "Dog",
    //         "dob": "2020/09/13",
    //         "breed": "Pug",
    //         "image": "",
    //         "sex": "Male",
    //         "weight": "20 lbs",
    //         "allergies": "Dogs",
    //         "medications": "",
    //         "laboratory": "",
    //         "microchip": "123456789",
    //         "visit_history": "",
    //         "primary_color": "Black",
    //         "notes": "Always wanted one",
    //         "primary_vet": "",
    //         "user_id": "6539503228bb6c8cbc5e42d4"
    //       }
    //     )
    // const data = await updatePet(
    //   {
    //     name: "Fluffy Doggy",
    //     type: "Dog",
    //     dob: "2020/09/13",
    //     breed: "Pug",
    //     image: "",
    //     sex: "Male",
    //     weight: "20 lbs",
    //     allergies: "Dogs",
    //     medications: "",
    //     laboratory: "",
    //     microchip: "123456789",
    //     visit_history: "",
    //     primary_color: "Black",
    //     notes: "Always wanted one",
    //     primary_vet: "",
    //     user_id: "6539503228bb6c8cbc5e42d4"
    //   }, "65391ff44c0eda94fb0b1150"
    // )
    // const data = await deletePet("6539840428bb6c8cbc5e42ff")
    // const data = await getAppointment()
    // const data = await getAppointmentsByUser("6539503228bb6c8cbc5e42d4")
    // const data = await getAppointmentsByPet("653973b628bb6c8cbc5e42dc")
    // const data = await createAppointment({
    //   type: "2025 Annual Checkup",
    //   date: "2025/01/01",
    //   time: "11:00 PM",
    //   status: "Confirmed",
    //   notes: "None",
    //   user_id: "6539503228bb6c8cbc5e42d4",
    //   pet_id: "653973b628bb6c8cbc5e42dc"
    // })
    // const data = await updateAppointment({
    //   type: "2024 Annual Checkup",
    //   date: "2024/01/01",
    //   time: "11:00 PM",
    //   status: "Confirmed",
    //   notes: "None",
    //   user_id: "6539503228bb6c8cbc5e42d4",
    //   pet_id: "653973b628bb6c8cbc5e42dc"
    // }, "653bd9e9fcb14303d50e9011")
    // const data = await deleteAppointment( "653bd9e9fcb14303d50e9011" )
    // const data = await getVaccinationsByUser("6539503228bb6c8cbc5e42d4")
    // const data = await getVaccinationsByPet("653973b628bb6c8cbc5e42dc")
    // const data = await createVaccination(
    //   {
    //     vaccine: "Zombie Vaccination",
    //     last_vaccine_date: "2020/03/16",
    //     expiration_date: "2025/03/16",
    //     user_id: "6539503228bb6c8cbc5e42d4",
    //     pet_id: "653973b628bb6c8cbc5e42dc",
    //   }
    // )
    // const data = await updateVaccination(
    //   {
    //     vaccine: "Super Zombie Vaccination",
    //     last_vaccine_date: "2020/03/16",
    //     expiration_date: "2025/03/16",
    //     user_id: "6539503228bb6c8cbc5e42d4",
    //     pet_id: "653973b628bb6c8cbc5e42dc",
    //   }, "653be186fcb14303d50e9020"
    // )
    // const data = await deleteVaccination("653be144fcb14303d50e901e")
        
        
    /* TESTING */
    // const data = await deleteVaccination("653be144fcb14303d50e901e")
    // const data = await getPetsByUser("6539503228bb6c8cbc5e42d4") 
    const loadedData = await loadUser("653921264c0eda94fb0b1155")
    // // Output
    console.log(loadedData)


  }

  const onSelectSwitch = (value) => console.log(`value: ${value}`);

  return (
    <View>
      <View>
        <Text>{count}</Text>
        <Button
          // aria-label="Increment value"
          title="Increment"
          onPress={() => dispatch(increment())}
        />
        <Button
          // aria-label="Decrement value"
          title="Decrement"
          onPress={() => dispatch(decrement())}
        />
        <Button
          // aria-label="Decrement value"
          title="Increment by 5"
          onPress={() => dispatch(incrementByAmount(5))}
        />
      </View>
      <View>
        <Text>Testing User Data Reducer</Text>
        <Text>{userData.user}</Text>
        <Button
          title="Test Redux Console Log"
          onPress={() => {
            let a = [...petData]
            // a.push({test: "hello"})
            console.log(a.length);
          }}
        />
        <Button
          title="Get Data - MongoDB Test"
          onPress={() => getData()}
        />
      </View>
      <View>
        <ToggleButtonCustom 
          option1={'AM'}
          option2={'PM'}
          onSelectSwitch={onSelectSwitch}
        />
      </View>
    </View>
  );
}
