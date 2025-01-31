import React, { createContext, useState, useEffect } from "react";
import { escomData } from '../assets/escomData';

// Create the context
export const EscomContext = createContext(null);

// Context Provider component
const EscomContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [toolsComponents, setToolsComponents] = useState({});
 const [sideBar, setSideBar] = useState(false); // To show all tools in the sidebar
 const [searchPage, setSearchPage] = useState(false);

 
  useEffect(() => {
    const toolComponents = escomData.reduce((acc, item) => {
      acc[item._id] = item.url;
      return acc;
    }, {});
    setToolsComponents(toolComponents);
  }, []);

  const backend_url = "https://cnet.onrender.com";

  const contextValue = {
    data,
    setData,
    escomData,
    toolsComponents,
    setSideBar,
    sideBar,
    backend_url,
    searchPage,
    setSearchPage
  };

  return (
    <EscomContext.Provider value={contextValue}>
      {children}
    </EscomContext.Provider>
  );
};

export default EscomContextProvider;
