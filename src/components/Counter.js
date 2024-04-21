import React from 'react'
import './counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../modules/counter/actions';


const Counter = () => {
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.counter)
    const addCount = () => {
        dispatch(increment())
    }
    const subCount = () => {
        if (count > 0) {
            dispatch(decrement())
        } else {
            alert("Count can't be less than 0")
        }

    }
    return (
        <div className="container">
            <div className="count">{count || 0}</div>
            <div className="buttons">
                <button onClick={addCount}>Increment</button>
                <button onClick={subCount}>Decrement</button>
            </div>
        </div >
    )
}

export default Counter
