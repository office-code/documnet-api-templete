import React, { useState, useEffect } from "react";
import { Nav, Navbar, } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import "../../assets/css/header.css";
import { Offcanvas } from 'react-bootstrap';
import { RiMenu3Fill } from "react-icons/ri";
import logo from '../../assets/images/logo4.png'
import jsonmenu from "../../json/menu.json"

export default function Header() {

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(jsonmenu.menuData);
  }, []);


  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  // sub menu in dropdown

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());

  // Filter function to match menu items
  const filterMenuItems = (label) => label.toLowerCase().includes(searchTerm);

  // Check if any submenu items match the search term
  const hasMatchingSubItems = (subItems) => subItems.some(item => filterMenuItems(item.label));


  return (
    <>
      {/* desktop organizer header */}
      <div className="header-bottam">
        <header id="header-organizer-desktop" className="header-scrolled">
          <Navbar expand="lg">
            <div className="container-fluid">
              <Navbar.Collapse id="navbarScroll" className="navbar-items-box">
                <Nav>
                  <ul className="navigate-n">
                    <li className="header-nav">
                      <NavLink
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </header>
      </div>

      {/* mobile responsive view organizer header */}
      <div>
        <div className="header-bottam">
          <header id="header-organizer-responsive">
            <Navbar expand="lg">
              <div className="container-fluid">
                <div className="organizer-responsive-main">
                  <NavLink to="/dashboard/home">
                    <div className="logo-header">
                      <img src={logo} />
                    </div>
                  </NavLink>
                  <div className="organizer-sm-1">
                    <ul className="navigate-n">
                      <li>
                        <NavLink to="/login"
                          className="nav-link-items nav-links-bg">
                          Login
                        </NavLink>
                      </li>
                      <li className="or-heder-icons">
                        <RiMenu3Fill onClick={handleShow} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Navbar>
          </header>
        </div>

        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start"
          className="offca-box">
          <Offcanvas.Header>
            <NavLink to="/dashboard/home">
              <div className="logo-header">
                <img src={logo} />
              </div>
            </NavLink>
            <MdClose onClick={handleClose} className="sidebar-redmobile-icon" />
          </Offcanvas.Header>
          <Offcanvas.Body >
            <div className="offcanvas-reponsive" id="sidebar-wrapper" >
              <div className='search-box'>
                <GoSearch className='input-icon-search' />
                <input
                  type="search"
                  placeholder='Find anything'
                  className='input-search-type'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div id="sidr-er-wrp">
                <ul className="nav flex-column mb-auto ">

                  {menuData.map((itemlist) => {
                    return (
                      <div key={itemlist.id}>
                        {
                          filterMenuItems(itemlist.label) && (
                            <li className="nav-item" onClick={handleClose}>
                              <NavLink to={itemlist.id}
                                onClick={() => handleNavItemClick(itemlist.id)}
                                className="sidebar-responsive-new">
                                <h6 className="sidebar-new-1">{itemlist.label}</h6>
                              </NavLink>
                            </li>
                          )
                        }
                      </div>
                    )
                  })}
                </ul>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

