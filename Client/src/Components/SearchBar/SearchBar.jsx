import React, { useContext, useEffect } from "react";
import './SearchBar.css';
import { EscomContext } from "../../Context/escomContext";

const SearchBar = () => {
  const { searchPage, setSearchPage } = useContext(EscomContext);

  useEffect(() => {
      console.log(searchPage);
  }, [searchPage])
  
  return (
    <>
      <div className="search-bar" id={!searchPage ? 'default' : "open-search"}>
        <input onClick={() => setSearchPage(true)} type="text" placeholder="Search a tool" />
        {!searchPage ? "" : <button onClick={() => setSearchPage(false)}>Close</button>}
        {!searchPage ? "" : <button onClick={() => setSearchPage(false)}>Close</button>}
      </div>
    </>
  )
}

export default SearchBar;