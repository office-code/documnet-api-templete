import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import jsonmenu from "../../json/menu.json"
import { ThreeDots } from "react-loader-spinner";
export default function Sidebarnav() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        // Simulate API call (replace with actual API)
        // setTimeout(() => {
        setMenuData(jsonmenu.menuData);
        // }, 100);
    }, []);



    const [activeNavItem, setActiveNavItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    };

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
                    onChange={handleSearchChange} />
            </div>
            <div id="sidr-er-wrp">
                <ul className="nav flex-column mb-auto ms-4">
                    {menuData && menuData.map((itemlist) => {
                        return (
                            <div key={itemlist.id}>
                                {filterMenuItems(itemlist.label) && (
                                    <li className={`nav-item ${activeNavItem === itemlist.id ? "active" : ""}`}>
                                        <NavLink to={itemlist.id} onClick={() => handleNavItemClick(itemlist.id)}>
                                            <h6>{itemlist.label}</h6>
                                        </NavLink>
                                    </li>
                                )}
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
