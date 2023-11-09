import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Navigation.styles.css";

export const Navigation = () => {
    return(
        <Fragment>
          <nav className="navigation">
           <div className="nav-links-container">
              <NavLink className="nav-link" to='/'>
                  Form
              </NavLink>
              <NavLink className="nav-link" to='/myboard'>
                  Board
              </NavLink>
           </div>
          </nav>
          <Outlet />
        </Fragment>
      );
}
