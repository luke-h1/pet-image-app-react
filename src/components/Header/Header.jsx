import React from 'react';
import './Header.scss';
import { FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <ul className="list">
            <li className="collection-item">
              <Link to="/" className="header-title">
                <h1>
                  Pet Images <FaDog className="header-icon" />
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
