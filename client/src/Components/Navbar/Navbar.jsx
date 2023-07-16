import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Cookies from "js-cookie";
import SearchIcon from "@mui/icons-material/Search";
import { useActiveUserContext } from "../../hooks/useActiveUserContext";
import SearchResult from "../SearchResult/SearchResult";
import Overlay from "../Overlay/Overlay";

const Navbar = () => {
  const { activeUser } = useActiveUserContext();
  const navigate = new useNavigate();
  const [searchValue, setSearchValue] = useState();
  const [searchResultContainerStyle, setSearchResultContainerStyle] = useState("hideSearch");

  const handleLogout = () => {
    Cookies.remove("jwt");
    navigate("/", { replace: true });
    window.location.reload();
  };

  const handleSearch = () => {
    if (searchResultContainerStyle === "hideSearch") {
      setSearchResultContainerStyle("showSearch");
    } else {
      setSearchResultContainerStyle("hideSearch");
    }
  };


  return (
    <div className="navbar">
      {searchResultContainerStyle === "showSearch" ? (
        <>
          <SearchResult
            searchValue={searchValue}
            className={searchResultContainerStyle}
          />
          <Overlay
            className={searchResultContainerStyle}
            onClick={handleSearch}
          />
        </>
      ) : (
        ""
      )}

      <div className="left">
        <div className="logo">
          <Link to="/">Receta</Link>
        </div>
      </div>

      {activeUser ? (
        <div className="center">
          <div className="search_wrapper">
            <input
              type="text"
              placeholder="Search something ...."
              onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase());
              }}
              onFocus={handleSearch}
            />
            <SearchIcon className="search-icon-nav" />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="right">
        <div className="menu-link">
          {activeUser ? (
            <>
              <Link to="/" className='ml'>Home</Link>
              <Link to="/create-post" className='ml'>Create Recipe</Link>
              <Link to="/" onClick={handleLogout} className='ml'>
                Logout
              </Link>
              <Link to={`/profile/${activeUser?._id}`} className='nav_profile_img'>
                <img src={activeUser?.profileImage} alt="Profile" className="nav_profile_image" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className='ml'>Login</Link>
              <Link to="/register" className='ml'>Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
