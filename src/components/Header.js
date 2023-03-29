import { ExpandMore, Language, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://imgs.search.brave.com/MtGO29cQoLcQr7nV5TX2B_Bp_Gbfhf81Q82vkSy3PN8/rs:fit:780:170:1/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2FpcmJuYi1s/b2dvLXBuZy1pcy1h/aXJibmItc2FmZS13/aGF0LXRoZS1ob21l/c3RheS1hcHAtZG9l/cy10by1tYWtlLWhv/c3RzLWFuZC1ndWVz/dHMtc2VjdXJlLWlu/LXRoZWlyLXVzZS03/ODAucG5n"
          alt=""
          className="header__icon"
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <Search />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
