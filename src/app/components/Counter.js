"use client"

import { useDispatch, useSelector } from "react-redux"
import styles from "../page.module.css"
import { decrement, increment, incrementByNumber } from "@/redux/features/counterSlice"

const Counter = () => {

    const counterState = useSelector((state) => state.counter.counter )
    const dispatch = useDispatch()
    const numberInc = 10

  return (
    <div className={styles.counterDiv}>
        <div className={styles.counter}>{counterState}</div>
        <div className={styles.buttons}>
            <button className={styles.btn}
                onClick={() => dispatch(increment())}
            >Increment</button>
            <button className={styles.btn}
                onClick={() => dispatch(decrement())}
            >Decrement</button>
            <button className={styles.btn}
                onClick={() => dispatch(incrementByNumber(numberInc))}
            >Increament By {numberInc} </button>
        </div>
    </div>
  )
}

export default Counter