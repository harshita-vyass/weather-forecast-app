import React from "react";
import icon from "../components/images/icon.png";

const Header = ({ setCity, handleSubmit }) => {
  return (
    <div className="header">
      <div className="icon">
        <img src={icon} width="30px" height="30px" alt="react logo" />
      </div>
      <h1 className="heading">Forecast</h1>
      <form action="" id="form" onSubmit={handleSubmit}>
        <button className="button" type="submit">
          Go
        </button>
        <select
          htmlFor=""
          id="city_list"
          className="search"
          onChange={(e) => setCity(e.target.value)}
        > 
          <option value="">SELECT</option>
          <option value="Jodhpur">Jodhpur</option>
          <option value="Udaipur">Udaipur</option>
        </select>
      </form>
    </div>
  );
};

export default Header;
