import React from "react";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import Button from "./core/Button";
import CountState from "./CountState";
const MainScreen = ({divStyle}) => {
    const [count , setCount] = useState(0);
    const navigate = useNavigate();


    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const navigateToSecondPage = () => navigate('/second');
    
    return (
        <div style={divStyle}>
            <h1>Counter App</h1>
            <p>Count: {count}</p> 
            <CountState shouldShow={true} count={count}/>
            <Button onClick={increment} text="Increment"/>
            <Button onClick={decrement} text="Decrement"/>
            <Button onClick={reset} text="Reset"/>
            <Button onClick={navigateToSecondPage} text="Go to second screen"/>
        </div>
    );
};
export default MainScreen;