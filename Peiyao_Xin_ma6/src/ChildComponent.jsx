import React, {useContext, useState} from "react";
import AppContext from "./AppContext";
import "./ChildComponent.css";

const ChildComponent = () => {
    const { hanldeCounter } = useContext(AppContext);
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
        hanldeCounter(!isOn)
    };

    return (
        <div
        className={`cell ${isOn ? 'cell-on' : ''}`}
        onClick={handleClick}
        ></div>
    );
};

export default ChildComponent;
