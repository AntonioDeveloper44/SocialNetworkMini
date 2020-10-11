import React from 'react';
import { superAdminNavbar } from './data';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const SuperAdminLayout = () => {
  return (
    <div className="create-template">
      <div className=" create-template__content sa">
        <div className="sa__navbar">
          {superAdminNavbar.map((navbarItem, index) => {
            return (
              <NavLink
                to={navbarItem.to}
                className="sa-navbar__item"
                key={index}
              >
                {navbarItem.name}
              </NavLink>
            );
          })}
        </div>
        <div className="sa__content">
          <h2>Create new template</h2>
          <h3>Basic Info</h3>
          {/* FORMIK ===>>>> <input type="text" placeholder="basic info" />*/}
          {/*<input type="text" placeholder="Product Name" />*/}
          {/*<input type="text" placeholder="Product Description" />*/}
          {/*<input type="text" placeholder="Categories" />*/}
        </div>
      </div>
    </div>
  );
};
