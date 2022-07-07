import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
const SearchBar = ({ placeholder, data }) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetcHproductNames = async () => {
      const response = await fetch(
        "http://localhost:5000/api/products/get-all-products-names"
      );
      const responseData = await response.json();


      setOptions(responseData.products);
    };

    fetcHproductNames();
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = options.filter((item) => {
        const regex = new RegExp(`${text}`, "gi");
        return item.name.match(regex);
      });
    }
    console.log(matches);
    setSuggestions(matches);
    setValue(text);
  };

  const onSuggestionHandler = (text) => {
    history.push(`/produse/${text}`);
    setValue("");
  };

  return (
    <div
      onBlur={() => {
        setTimeout(() => {
          setSuggestions([]);
        }, 100);
      }}
      className="search"
    >
      <div classname="search-results">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={value}
          size="18"
          
        />
        {suggestions &&
          suggestions.map((suggestion, i) => {
            if (i < 3) {
              return (
                <div
                  onClick={() => {
                    onSuggestionHandler(suggestion.name);
                  }}
                  className="choice"
                  key={i}
                >
                  {suggestion.name}
                </div>
              );
            }
          })}
          
      </div>

      <SearchIcon style={{ fontSize: "1.8rem" }} />
    </div>
  );
};

export default SearchBar;
