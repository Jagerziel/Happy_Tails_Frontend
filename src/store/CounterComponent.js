import { Button, Text, View } from "react-native";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./reducers/counter";
import { updateData } from "./reducers/userData";


export function Counter() {
    // const count = useSelector((state) => state.counter.value) //Shorthand
    const count = useSelector((state) => state.counter.count); //Other Method to target specific value
    const userData = useSelector((state) => state.userData.data)
    const dispatch = useDispatch();
    let data = {
        user: "Ryan"
    }
    console.log(userData)
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
                    dispatch(updateData(data)),
                    console.log(userData)
                }}
            />
        </View>
        </View>
    );
}
