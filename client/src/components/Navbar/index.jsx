
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import './navbar.css'
import "./paper-kit.min.css";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container className='justify-content-between'>
        
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom" to="/" tag={Link}>
            IB Shop
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem >
              <NavLink to="/" tag={Link} active>
              <HomeOutlinedIcon /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" tag={Link} >
              <InfoOutlinedIcon /> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" tag={Link}>
              <StorefrontIcon /> Store
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" tag={Link}>
              <HeadsetMicOutlinedIcon /> Contact Us
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/" tag={Link}>
              <SearchIcon />
              </NavLink>
            </NavItem>
           
            
            <NavItem>
              <NavLink to="/" tag={Link}>
              <PersonOutlineOutlinedIcon />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" tag={Link}>
              <ShoppingCartOutlinedIcon />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
