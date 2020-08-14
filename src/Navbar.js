import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    // effect 1st
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    // then cleanup
    return () => {
      //   cleanup
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://img-cdn.tnwcdn.com/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1235992718171467776%2FPaX2Bz1S.jpg&signature=af6aa46bf61da560b4eeda5e2b725959"
        alt="Netflix logo"
      />
    </div>
  );
};

// go into App
export default Navbar;
