import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import counterSlice from "../redux/slices/counterSlice";

const Counter = () => {
    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
        <div>Count : {count}</div>
        {/* <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button> */}
        <button onClick={() => dispatch(counterSlice.actions.increment())}>Increment</button>
        <button onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
        </>
    )
}

export default Counter;