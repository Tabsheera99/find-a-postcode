import { useState } from "react";
import { Link } from "react-router-dom";

import { autocompletePostcode } from "src/api/postcode";
import Select from "src/components/select";
import Button from "src/components/button";
import "./home.css";

const Home = () => {
  const [searchInput, setSearchInput] = useState({});

  const loadOptions = async (postcode) => {
    const data = await autocompletePostcode(postcode);
    const options = data.result.map((item) => ({
      label: item,
      value: item.toLowerCase().replace(/\s/g, ""),
    }));
    return options;
  };

  const handleChange = (input) => {
    setSearchInput(input);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Find a postcode</h1>
      <Select
        loadOptions={loadOptions}
        onChange={handleChange}
        cacheOptions
        placeholder="Enter a postcode"
        isClearable
      />
      <div className="button-container">
        <Link to={`/${searchInput?.value}`}>
          <Button label="Search" isDisabled={!searchInput?.label} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
