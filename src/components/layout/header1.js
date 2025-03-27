import React, { useState, useEffect } from "react";
import { Nav, Navbar, } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { GoSearch } from "react-icons/go";

import "../../assets/css/header.css";
import { Offcanvas } from 'react-bootstrap';
// import { CiMenuFries } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";

import logo from '../../assets/images/logo4.png'

export default function Header() {
  // const [dropdownState, setDropdownState] = useState(false);
  // const handleDropdownClick = () => {
  //   setDropdownState(!dropdownState);
  // };

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  // sub menu in dropdown

  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };


  const [isOpen4, setIsOpen4] = useState(false);
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };


  const [isOpen5, setIsOpen5] = useState(false);
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };


  const [isOpen6, setIsOpen6] = useState(false);
  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };


  const [isOpen7, setIsOpen7] = useState(false);
  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };

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
                    <li>
                      <div className="dropdown">
                        <div className="dropdown__select">
                          <span className="dropdown__selected">
                            <div className="header-profile-box">
                              <div className="header-profile">
                                API Reference
                              </div>
                            </div>
                          </span>
                        </div>
                        <ul className="dropdown__list">
                          <li className="dropdown__item">
                            <span className="dropdown__text">
                              <NavLink
                                to=""
                              // onClick={handleDropdownClick}
                              >
                                Stripe.js
                              </NavLink>
                            </span>
                          </li>
                          <li className="dropdown__item">
                            <span className="dropdown__text">
                              <NavLink
                                to=""
                              // onClick={handleDropdownClick}
                              >
                                Stripe CLI
                              </NavLink>
                            </span>
                          </li>
                          <li className="dropdown__item">
                            <span className="dropdown__text">
                              <NavLink
                                to=""
                              // onClick={handleDropdownClick}
                              >
                                IOS
                              </NavLink>
                            </span>
                          </li>
                          <li className="dropdown__item">
                            <span className="dropdown__text">
                              <NavLink
                                to=""
                              // onClick={handleDropdownClick}
                              >
                                Android
                              </NavLink>
                            </span>
                          </li>
                          <li className="dropdown__item">
                            <span className="dropdown__text">
                              <NavLink
                                to=""
                              // onClick={handleDropdownClick}
                              >
                                React Native
                              </NavLink>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="">
                      Docs
                    </li>
                    <li className="">
                      Support
                    </li>
                    <li className="">
                      Sign-in
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </header>
      </div>

      {/* mobile responsive view organizer header */}
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
                      <Nav.Link
                        className="nav-link-items nav-links-bg">
                        SIGN IN
                      </Nav.Link>
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
          {/* <div className="d-flex" id="wrapper"> */}
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
                {filterMenuItems('Introduction') && (
                  <li
                  className="nav-item"
                    // className={`nav-item ${activeNavItem === "home" ? "active" : ""
                    //   }`}
                    // style={{ display: "block" }}
                  >
                    <NavLink to="/dashboard/home"
                    onClick={handleClose}
                      className="sidebar-responsive-new">
                      <h6 className="sidebar-new-1">Introduction</h6>
                    </NavLink>
                  </li>
                )}
                {filterMenuItems('Authentication') && (
                  <li
                    // className={`nav-item ${activeNavItem === "authentication" ? "active" : ""
                    //   }`}
                    className="nav-item"
                  >
                    <NavLink
                      to="authentication"
                      onClick={handleClose}
                      // onClick={() => handleNavItemClick("authentication")}
                      className="sidebar-responsive-new"
                    >
                      <h6 className="sidebar-new-1">Authentication</h6>
                    </NavLink>
                  </li>
                )}
                {filterMenuItems('Errors') && (
                  <li
                  className="nav-item"
                    // className={`nav-item ${activeNavItem === "errors" ? "active" : ""}`}
                  >
                    <NavLink
                      to="errors"
                      onClick={handleClose}

                      // onClick={() => handleNavItemClick("errors")}
                      className="sidebar-responsive-new"
                    >
                      <h6 className="sidebar-new-1">Errors</h6>
                    </NavLink>
                  </li>
                )}
                {filterMenuItems('expanding-objects') && (
                  <li
                    className={`nav-item ${activeNavItem === "expanding-objects" ? "active" : ""
                      }`}
                  >
                    <NavLink to="expanding-objects" onClick={() => handleNavItemClick("expanding-objects")}
                      className="sidebar-responsive-new">
                      <h6 className="sidebar-new-1">Expanding Responses</h6>
                    </NavLink>
                  </li>
                )}
                {filterMenuItems('idempotent-requests') && (
                  <li
                    className={`nav-item ${activeNavItem === "idempotent-requests" ? "active" : ""
                      }`}
                  >
                    <NavLink
                      to="idempotent-requests"
                      onClick={() => handleNavItemClick("idempotent-requests")}
                      className="sidebar-responsive-new"
                    >
                      <h6 className="sidebar-new-1">Idempotent requests</h6>
                    </NavLink>
                  </li>
                )}
                {filterMenuItems('idempotent-requests') && (
                  <li
                    className={`nav-item ${activeNavItem === "metadata" ? "active" : ""
                      }`}
                  >
                    <NavLink to="metadata" onClick={() => handleNavItemClick("metadata")}
                      className="sidebar-responsive-new">
                      <h6 className="sidebar-new-1">Metadata</h6>
                    </NavLink>
                  </li>
                )}
                {filterMenuItems('idempotent-requests') && (
                  <li
                    className={`nav-item ${activeNavItem === "pagination" ? "active" : ""
                      }`}
                  >
                    <NavLink to="pagination" onClick={() => handleNavItemClick("pagination")}
                      className="sidebar-responsive-new">
                      <h6 className="sidebar-new-1">Pagination</h6>
                    </NavLink>
                  </li>
                )}
                {filterMenuItems('idempotent-requests') && (
                  <li
                    className={`nav-item ${activeNavItem === "versioning" ? "active" : ""
                      }`}
                  >
                    <NavLink to="versioning" onClick={() => handleNavItemClick("versioning")}
                      className="sidebar-responsive-new">
                      <h6 className="sidebar-new-1">Versioning</h6>
                    </NavLink>
                  </li>
                )}

                {/* {(filterMenuItems('Core Resources') || hasMatchingSubItems([
                  { label: 'Balance' },
                  { label: 'Balance Transactions' },
                  { label: 'Charges' },
                  { label: 'Customers' },
                  { label: 'Customer Session' },
                  { label: 'Payment Intents' },
                  { label: 'Setup Intents' },
                  { label: 'Payouts' },
                  { label: 'Refunds' }
                ])) && (
                    <li className='nav-item'>
                      <NavLink
                        className="sidebar-responsive-new">
                        <h6 onClick={toggleDropdown} className='sidebar-new-1 respon-side-menu'>Core Resources
                        </h6>
                      </NavLink>

                      <div className='submenu-box'>
                        <ul className='list-ul'>
                          {filterMenuItems('Balance') && (
                            <li className='list-submenu'>
                              <NavLink to="balance" className="sidebar-responsive-new">Balance</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Balance Transactions') && (
                            <li className='list-submenu'>
                              <NavLink to="balance-transactions" className="sidebar-responsive-new">Balance Transactions</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Charges') && (
                            <li className='list-submenu'>
                              <NavLink to="charges" className="sidebar-responsive-new">Charges</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Customers') && (
                            <li className='list-submenu'>
                              <NavLink to="customers" className="sidebar-responsive-new">Customers</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Customer Session') && (
                            <li className='list-submenu'>
                              <NavLink to="customer-sessions" className="sidebar-responsive-new">Customer Session</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Payment Intents') && (
                            <li className='list-submenu'>
                              <NavLink to="payment-intents" className="sidebar-responsive-new">Payment Intents</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Setup Intents') && (
                            <li className='list-submenu'>
                              <NavLink to="setup-intents" className="sidebar-responsive-new">Setup Intents</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Payouts') && (
                            <li className='list-submenu'>
                              <NavLink to="payouts" className="sidebar-responsive-new">Payouts</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Refunds') && (
                            <li className='list-submenu'>
                              <NavLink to="refunds" className="sidebar-responsive-new">Refunds</NavLink>
                            </li>
                          )}
                        </ul>
                      </div>
                    </li>
                  )}

                {(filterMenuItems('Payment Methods') || hasMatchingSubItems([
                  { label: 'Payment Methods' },
                  { label: 'Payment Method Configurations' },
                  { label: 'Payment Method Domains' },
                  { label: 'Bank Accounts' },
                  { label: 'Cash Balance' },
                  { label: 'Cash Balance Transaction' },
                  { label: 'Cards' }
                ])) && (
                    <li className='nav-item'>
                      <NavLink
                        className="sidebar-responsive-new">
                        <h6 onClick={toggleDropdown1} className='sidebar-new-1 respon-side-menu'>Payment Methods
                        
                        </h6>
                      </NavLink>

                      <div className='submenu-box'>
                        <ul className='list-ul  pt-1'>
                          {filterMenuItems('Payment Methods') && (
                            <li className='list-submenu'>
                              <NavLink to="payment-methods" className="sidebar-responsive-new">Payment Methods</NavLink>
                            </li>
                          )}

                          {filterMenuItems('Payment Method Configurations') && (
                            <li className='list-submenu'>
                              <NavLink to="payment-methods-configure" className="sidebar-responsive-new">Payment Method Configurations</NavLink>
                            </li>
                          )}

                          {filterMenuItems('Payment Method Domains') && (
                            <li className='list-submenu'>
                              <NavLink to="payment-method-domains" className="sidebar-responsive-new">Payment Method Domains</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Bank Accounts') && (
                            <li className='list-submenu'>
                              <NavLink to="bank-accounts" className="sidebar-responsive-new">Bank Accounts</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Cash Balance') && (
                            <li className='list-submenu'>
                              <NavLink to="cash-balance" className="sidebar-responsive-new">Cash Balance</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Cash Balance Transaction') && (
                            <li className='list-submenu'>
                              <NavLink to="cash-balance-transaction" className="sidebar-responsive-new">Cash Balance Transaction</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Cards') && (
                            <li className='list-submenu'>
                              <NavLink to="cards" className="sidebar-responsive-new">Cards</NavLink>
                            </li>
                          )}
                        </ul>
                      </div>
                    </li>
                  )}

                {(filterMenuItems('Products') || hasMatchingSubItems([
                  { label: 'Products' },
                  { label: 'Prices' },
                  { label: 'Coupons' },
                  { label: 'Promotion Code' },
                  { label: 'Discounts' },
                  { label: 'Tax Code' },
                  { label: 'Tax Rate' },
                  { label: 'Shipping Rates' }
                ])) && (
                    <li className='nav-item'>
                      <NavLink
                        className="sidebar-responsive-new">
                        <h6 onClick={toggleDropdown2} className='sidebar-new-1 respon-side-menu'>Products
                         
                        </h6>
                      </NavLink>
                      <div className='submenu-box'>
                        <ul className='list-ul  pt-1'>
                          {filterMenuItems('Products') && (
                            <li className='list-submenu'>
                              <NavLink to="product" className="sidebar-responsive-new">Products</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Prices') && (
                            <li className='list-submenu'>
                              <NavLink to="prices" className="sidebar-responsive-new">Prices</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Coupons') && (
                            <li className='list-submenu'>
                              <NavLink to="coupons" className="sidebar-responsive-new">Coupons</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Promotion Code') && (
                            <li className='list-submenu'>
                              <NavLink to="promotion-code" className="sidebar-responsive-new">Promotion Code</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Discounts') && (
                            <li className='list-submenu'>
                              <NavLink className="sidebar-responsive-new">Discounts</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Tax Code') && (
                            <li className='list-submenu'>
                              <NavLink className="sidebar-responsive-new">Tax Code</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Tax Rate') && (
                            <li className='list-submenu'>
                              <NavLink className="sidebar-responsive-new">Tax Rate</NavLink>
                            </li>
                          )}
                          {filterMenuItems('Shipping Rates') && (
                            <li className='list-submenu'>
                              <NavLink className="sidebar-responsive-new">Shipping Rates</NavLink>
                            </li>
                          )}
                        </ul>
                      </div>
                    </li>
                  )}

                {(filterMenuItems('Checkout') || hasMatchingSubItems([
                  { label: 'Sessions' },

                ])) && (
                    <li className='nav-item'>
                      <NavLink
                        className="sidebar-responsive-new">
                        <h6 onClick={toggleDropdown3} className='sidebar-new-1 respon-side-menu'>Checkout
                        
                        </h6>
                      </NavLink>
                      <div className='submenu-box'>
                        <ul className='list-ul  pt-1'>
                          {filterMenuItems('Sessions') && (
                            <li className='list-submenu'>
                              <NavLink to="sessions" className="sidebar-responsive-new">Sessions</NavLink>
                            </li>
                          )}
                        </ul>
                      </div>
                    </li>
                  )} */}
              </ul>
            </div>
          </div>
          {/* </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
