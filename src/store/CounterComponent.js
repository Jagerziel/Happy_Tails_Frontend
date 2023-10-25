import { Button, Text, View } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./counter"

export function Counter() {
    // const count = useSelector((state) => state.counter.value) //Shorthand
    const count = useSelector((state) => state.counter.count) //Other Method to target specific value
    const dispatch = useDispatch()
  
    return (
      <View>
        <View>
          <Button
            // aria-label="Increment value"
            title="Increment"
            onPress={() => dispatch(increment())}
          />
          <Text>{count}</Text>
          <Button
            // aria-label="Decrement value"
            title="Decrement"
            onPress={() => dispatch(decrement())}
          />
        </View>
      </View>
    )
  }