import React from "react";

import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import "./Navigation.scss";

const Navigation = () => {
  const navigation = useRef(null);
  const anchoredClass = useRef("navigation--is-anchored");

  useEffect(() => {
    const handleOnScroll = () => {
      if (navigation.current) {
        if (window.scrollY >= 100) {
          navigation.current.classList.add(anchoredClass.current);
        } else {
          navigation.current.classList.remove(anchoredClass.current);
        }
      }
    };

    document.addEventListener("scroll", handleOnScroll);

    return () => document.removeEventListener("scroll", handleOnScroll);
  }, []);

  const [isLinksListShown, setIsLinksListShown] = useState(false);

  const getLinksListClass = () =>
    isLinksListShown
      ? "navigation__links-list navigation__links-list--is-shown"
      : "navigation__links-list";

  const getHamburgerSymbolClass = () =>
    isLinksListShown ? "fas fa-times" : "fas fa-bars";

  return (
    <nav className="navigation" ref={navigation}>
      <ul className={getLinksListClass()}>
        <li className="navigation__link-item">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="navigation__link-item">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="navigation__link-item">
          <NavLink to="/events">Events</NavLink>
        </li>
        <li className="navigation__link-item">
          <NavLink to="/chef">Chef</NavLink>
        </li>
        <li className="navigation__link-item">
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className="navigation__link-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button
        className="navigation__hamburger"
        onClick={() => setIsLinksListShown(!isLinksListShown)}
      >
        <i className={getHamburgerSymbolClass()}></i>
      </button>
    </nav>
  );
};

export default Navigation;
