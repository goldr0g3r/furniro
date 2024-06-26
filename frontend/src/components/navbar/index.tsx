import React from "react";
import "./navbar_grid.scss";
import site_logo from "../../assets/logo";
import SearchIcon from "../../assets/icons/search";
import UserIcon from "../../assets/icons/user";
import HeartIcon from "../../assets/heart";
import CartIcon from "../../assets/icons/cart";
import MenuIcon from "../../assets/icons/menu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <img src={site_logo} alt="logo" className="logo_img" />
        <span className="logo_text">Furniro</span>
      </div>
      <div className="navbar_middle">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="shop/">Shop</a>
          </li>
          <li>
            <a href="about/">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar_right">
        <button>
          <UserIcon />
        </button>
        <button>
          <SearchIcon />
        </button>
        <button>
          <HeartIcon />
        </button>
        <button>
          <CartIcon />
        </button>
      </div>

      <div className="mobile_menu">
        <button
          onClick={() => {
            const menu = document.querySelector(".navbar_middle ul");
            console.log(menu?.classList);
            if (menu) {
              menu.classList.toggle("show_menu");
            }
          }}
        >
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
