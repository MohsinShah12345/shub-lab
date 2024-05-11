import React, { useState } from 'react'
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
        <div className="container" style={{
            background: count % 2 == 0 ? "green" : "blue"
        }}>
            <div className="count">{count || 0}</div>
            <div className="buttons">
                <button onClick={addCount}>Increment</button>
                <button onClick={subCount}>Decrement</button>
            </div>
            <div className='Increment' style={{
                display: "flex",
                flexWrap: 'wrap',// Optional: Center the buttons horizontally
                justifyContent: "center",
                margin: "auto"
            }}>
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => {
                        return (
                            <button key={_} style={{
                                paddingTop: "1rem",
                                paddingRight: "2rem",
                                paddingBottom: "1rem",
                                paddingLeft: "2rem",
                                border: "2px solid red",
                                borderRadius: "5px",
                                fontSize: "15px",
                                width: "170px",
                                float: "centre",
                                margin: "0.6rem"
                            }}> Add</button>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Counter
