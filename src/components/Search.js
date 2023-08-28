import { filterData } from "../utils/helper";
import { useState } from "react";
const Search = ({ setFilteredRestaurant, allRestaurant }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = () => {
    setFilteredRestaurant(filterData(allRestaurant, searchText));
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };
  return (
    <div className="fixed top-20 z-40 left-0  right-0 m-2 flex justify-center ">
      <div className="bg-not-perfect-grey shadow-sm p-2 flex ">
        <input
          type="text"
          className="focus:border-vibrant-red p-1 m-1 rounded-full border border-solid border-6 border-funny-yellow"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
        <button
          className="rounded-full bg-vibrant-red p-1 pl-2 pr-2 m-1  text-fefe"
          onClick={handleChange}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
