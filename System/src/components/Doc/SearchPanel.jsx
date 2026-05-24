import React, { useState } from "react";
import { FaSearch, FaMicrophone, FaChevronUp } from "react-icons/fa";
import "../../Styles/SearchPanel.scss";

const SearchPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const togglePanel = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
      setIsOpen(false);
      setQuery("");
    }
  };

  return (
    <>
      <div className={`dock-arrow ${isOpen ? "open" : ""}`} onClick={togglePanel}>
        <FaChevronUp />
      </div>

      <div className={`search-panel-container ${isOpen ? "open" : ""}`}>
        <div className="google-logo">
          <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
        </div>
        
        <form className="search-form" onSubmit={handleSearch}>
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search Google or type a URL" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={isOpen}
          />
          <FaMicrophone className="mic-icon" />
        </form>
        
        <div className="search-buttons">
          <button onClick={handleSearch}>Google Search</button>
          <button onClick={() => window.open('https://www.google.com/doodles', '_blank')}>I'm Feeling Lucky</button>
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
