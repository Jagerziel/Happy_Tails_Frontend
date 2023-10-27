import { Button, Text, View } from "react-native";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./reducers/counter";
import { updateData } from "./reducers/userDataReducer";

import { getPets, getPetsByUser, createPet, updatePet } from "../server/pet.js";




export function Counter() {
  // const count = useSelector((state) => state.counter.value) //Shorthand
  const count = useSelector((state) => state.counter.count); //Other Method to target specific value
  const userData = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();
  let data = {
    user: "Ryan",
  };
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
        
        
    /* TESTING */
    const data = await updatePet(
      {
        name: "Fluffy Doggy",
        type: "Dog",
        dob: "2020/09/13",
        breed: "Pug",
        image: "",
        sex: "Male",
        weight: "20 lbs",
        allergies: "Dogs",
        medications: "",
        laboratory: "",
        microchip: "123456789",
        visit_history: "",
        primary_color: "Black",
        notes: "Always wanted one",
        primary_vet: "",
        user_id: "6539503228bb6c8cbc5e42d4"
      }, "65391ff44c0eda94fb0b1150"
    )




    // Output
    console.log(data)
  }



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
          title="Update User"
          onPress={() => {
            dispatch(updateData(data)), console.log(userData);
          }}
        />
        <Button
          title="Get Data"
          onPress={() => getData()}
        />
      </View>
    </View>
  );
}
