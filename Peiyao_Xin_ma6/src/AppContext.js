import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    // update the number of boxes that are black
    const handleCounter = (isOn) => {
        setCount(prev = isOn ? prev + 1 : prev - 1);
    };

    return (
        <AppContext.Provider value = {{ count, handleCounter}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
