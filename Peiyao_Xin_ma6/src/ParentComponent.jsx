import React, {useContext} from "react";
import ChildComponent from "./ChildComponent";
import AppContext from "./AppContext";
import './ParentComponent.css';

const ParentComponent = () => {
    const { count } = useContext(AppContext);

    return (
        <div>
            <h2>Count: {count}</h2>
            <div className="parent-container">
                <ChildComponent />
                <ChildComponent />
                <ChildComponent />
                <ChildComponent />
            </div>
        </div>
    );
};

export default ParentComponent;
