import React from 'react'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { navigation } from '../../../constants/navigation'

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    navigate("/");

    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav className="flex gap-12">
      {navigation.map((item) =>
        item.action === "about" ? (
          <button
            key={item.label}
            onClick={handleAboutClick}
            className="cursor-pointer"
          >
            {item.label}
          </button>
        ) : (
          <NavLink key={item.label} to={item.to}>
            {item.label}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default Navigation
