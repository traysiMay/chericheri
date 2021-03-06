import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./animations.css";
import PopupProvider from "./Popup";
import NavProvider from "./NavContext";
import LoadingProvder from "./Bits/Loading/Context";
import { HashRouter as Router } from "react-router-dom";
export const DeviceContext = createContext(undefined);

const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(undefined);

  const updateSize = () => {
    if (window.innerWidth > window.innerHeight) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };
  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <DeviceProvider>
      <PopupProvider>
        <LoadingProvder>
          <NavProvider>
            <Router basename="/">
              <App />
            </Router>
          </NavProvider>
        </LoadingProvder>
      </PopupProvider>
    </DeviceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
