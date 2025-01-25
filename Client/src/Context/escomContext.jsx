import React, { createContext, useState, useEffect } from "react";
import { escomData } from '../assets/escomData';

// Create the context
export const EscomContext = createContext(null);

// Context Provider component
const EscomContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [toolsComponents, setToolsComponents] = useState({});
 const [sideBar, setSidekBar] = useState(false); // To show all tools in the sidebar

 
  useEffect(() => {
    const toolComponents = escomData.reduce((acc, item) => {
      acc[item._id] = item.url;
      return acc;
    }, {});
    setToolsComponents(toolComponents);
  }, []);

  const backend_url = "http://localhost:30017";

  const contextValue = {
    data,
    setData,
    escomData,
    toolsComponents,
    setSidekBar,
    sideBar,
    backend_url
  };

  return (
    <EscomContext.Provider value={contextValue}>
      {children}
    </EscomContext.Provider>
  );
};

export default EscomContextProvider;
