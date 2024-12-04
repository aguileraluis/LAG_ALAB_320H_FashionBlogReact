import React from 'react';

const Navbar = () => {
  return (
    <div>
          <ul className="nav flex-column">
        <li className="nav-item">
          <h1 className="nav-link" id="heading">Sartre's List</h1>
        </li>
        <li className="nav-item">
          <h2 className="nav-link" id="subheading" href="#">Better-Dressed People</h2>
        </li>
      </ul>
      <ul role="navigation" className="nav flex-row" id="navigation">
        <li className="nav-item">
          <a className="nav-link navilink" aria-current="page" href="#">Women's</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilink" href="#">Men's</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilink" href="#">On the Street</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilink" aria-disabled="true">The Catwalk</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilink" href="#">AdWatch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilink" aria-disabled="true">About</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar; 
