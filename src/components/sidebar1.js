import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export default function Sidebarnav() {
    const [activeNavItem, setActiveNavItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const handleNavItemClick = (navItem) => setActiveNavItem(navItem);
    const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());

    // Filter function to match menu items
    const filterMenuItems = (label) => label.toLowerCase().includes(searchTerm);

    // Check if any submenu items match the search term
    const hasMatchingSubItems = (subItems) => subItems.some(item => filterMenuItems(item.label));

    return (
        <div id="sidebar-wrapper">
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
                <ul className="nav flex-column mb-auto ms-4">
                    {filterMenuItems('Introduction') && (
                        <li className={`nav-item ${activeNavItem === "home" ? "active" : ""}`}>
                            <NavLink to="home" onClick={() => handleNavItemClick("home")}>
                                <h6>Introduction</h6>
                            </NavLink>
                        </li>
                    )}
                    {filterMenuItems('Authentication') && (
                        <li className={`nav-item ${activeNavItem === "authentication" ? "active" : ""}`}>
                            <NavLink to="authentication" onClick={() => handleNavItemClick("authentication")}>
                                <h6>Authentication</h6>
                            </NavLink>
                        </li>
                    )}
                    {filterMenuItems('Errors') && (
                        <li className={`nav-item ${activeNavItem === "errors" ? "active" : ""}`}>
                            <NavLink to="errors" onClick={() => handleNavItemClick("errors")}>
                                <h6>Errors</h6>
                            </NavLink>
                        </li>
                    )}

                    {/* Example of submenu with filtering */}
                    {(filterMenuItems('Core Resources') || hasMatchingSubItems([
                        { label: 'Balance' },
                        { label: 'Balance Transactions' },
                        { label: 'Charges' },
                        { label: 'Customers' }
                    ])) && (
                        <li className='nav-item'>
                            <h6 onClick={() => setIsOpen(!isOpen)} className='submenu-h6'>
                                Core Resources
                                {!isOpen ? <IoIosArrowForward className='sidebar-arrow-icon' /> : <IoIosArrowDown className='sidebar-arrow-icon' />}
                            </h6>
                            {isOpen && (
                                <div className='submenu-box'>
                                    <ul className='list-ul'>
                                        {filterMenuItems('Balance') && (
                                            <li className='list-submenu'>
                                                <NavLink to="balance" className="sidebar-menu-drop">Balance</NavLink>
                                            </li>
                                        )}
                                        {filterMenuItems('Balance Transactions') && (
                                            <li className='list-submenu'>
                                                <NavLink to="balance-transactions" className="sidebar-menu-drop">Balance Transactions</NavLink>
                                            </li>
                                        )}
                                        {filterMenuItems('Charges') && (
                                            <li className='list-submenu'>
                                                <NavLink to="charges" className="sidebar-menu-drop">Charges</NavLink>
                                            </li>
                                        )}
                                        {filterMenuItems('Customers') && (
                                            <li className='list-submenu'>
                                                <NavLink to="customers" className="sidebar-menu-drop">Customers</NavLink>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </li>
                    )}
                    {/* Additional sections with dropdown */}
                    {filterMenuItems('Products') || hasMatchingSubItems([{ label: 'Products' }, { label: 'Prices' }]) && (
                        <li className='nav-item'>
                            <h6 onClick={() => setIsOpen2(!isOpen2)} className='submenu-h6'>
                                Products
                                {!isOpen2 ? <IoIosArrowForward className='sidebar-arrow-icon' /> : <IoIosArrowDown className='sidebar-arrow-icon' />}
                            </h6>
                            {isOpen2 && (
                                <div className='submenu-box'>
                                    <ul className='list-ul'>
                                        {filterMenuItems('Products') && (
                                            <li className='list-submenu'>
                                                <NavLink to="product" className="sidebar-menu-drop">Products</NavLink>
                                            </li>
                                        )}
                                        {filterMenuItems('Prices') && (
                                            <li className='list-submenu'>
                                                <NavLink to="prices" className="sidebar-menu-drop">Prices</NavLink>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
