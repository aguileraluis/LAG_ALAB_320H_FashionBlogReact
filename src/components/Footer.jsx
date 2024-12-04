import React from 'react'; 

const Footer = () => {
  return (
    <div>
           <footer role="navigation" className="nav flex-row" id="footNav">
        <li className="nav-item">
          <a className="nav-link navilinkfoot" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilinkfoot" aria-current="page" href="#">Women's</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilinkfoot" href="#">Men's</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilinkfoot" href="#">On the Street</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilinkfoot" aria-disabled="true">The Catwalk</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilinkfoot" href="#">AdWatch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilinkfoot" aria-disabled="true">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navilinkfoot" aria-disabled="true">Tips</a>
        </li>
      </footer>
      <ul>
      <li className="nav-item">
        <h2 className="nav-link" id="heading-bottom-footer">© 2013 Valet Industries, Inc</h2>
      </li>
      </ul>
    </div>
  )
}

export default Footer
