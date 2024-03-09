import React, {useContext, useState} from "react";
import AppContext from "./AppContext";
import "./ChildComponent.css";

const ChildComponent = () => {
    const { handleCounter } = useContext(AppContext);
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
        handleCounter(!isOn)
    };

    return (
        <div
        className={`box ${isOn ? 'box-on' : ''}`}
        onClick={handleClick}
        ></div>
    );
};

export default ChildComponent;
