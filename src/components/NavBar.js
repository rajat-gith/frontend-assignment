import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="section_1">
        <img src="/assets/LOGO.png" alt="" srcset="" />
        <div className="dropdowns">
          <div className="course_dropdown">
            <p>Courses</p>
            <ArrowDropDownIcon />
          </div>
          <div className="program_dropdowns">
            <p>Programs</p>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <div className="actions_buttons">
        <a className="loginButton">Login</a>
        <SearchIcon className="searchButton" />
        <button className="joinNowButton">JOIN NOW</button>
      </div>
    </div>
  );
}

export default NavBar;
