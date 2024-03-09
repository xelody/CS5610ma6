import React from "react";
import ParentComponent from './ParentComponent'
import { AppProvider } from "./AppContext";

import "./App.css"

function App() {
  return (
    <AppProvider>
      <div className="App">
        <ParentComponent />
      </div>
    </AppProvider>
  );
}

export default App;
