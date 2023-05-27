import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="mx-2 my-2" style={props.style}>
      <div style={props.style} className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" style={props.style} className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-amd" viewBox="0 0 16 16">
            <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z" />
          </svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to='/' style={props.style}  className="nav-link px-2 link-secondary">TextUtils</Link></li>
          <li><Link to='/about' style={props.style}  className="nav-link px-2 link-body-emphasis">About</Link></li>
        </ul>
          <button className='btn btn-info rounded-pill mx-2' onClick={props.theme1}>Cyan</button>
          <button className='btn btn-danger rounded-pill ' onClick={props.theme2}>Red</button>
        <div style={props.style} className="form-check form-switch mx-3">
          <input className="form-check-input" type="checkbox" onClick={props.switch} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: 'SetTitle'
};


