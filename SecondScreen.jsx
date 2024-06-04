import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from './Button';


const SecondScreen = () => {
    const navigate = useNavigate();
    const navigateBack = () => navigate('/');
    return (
        <div>
            <h1>Second Screen</h1>
            <Button onClick={navigateBack} text="Go back to the Main page" />
        </div>
        
    );

};

export default SecondScreen;