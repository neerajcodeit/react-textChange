import React from 'react'
// import './Navbar.css';


const Header = (props) => {
  return (
    <>
    <div className="container-fluid" >
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12 ">
                <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>     
                    <div className="container-fluid">
                      <a className="navbar-brand" href="/">{props.title}</a>

                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto text-white">
                          
                          <li className="nav-item me-2">
                            <a className="nav-link" aria-current="page" href="indesx.html">Home</a>
                          </li>
                          <li className="nav-item me-2">
                            <a className="nav-link text-uppercase" href="/">About</a>
                          </li>
                          <li className="nav-item me-2">
                            <a className="nav-link text-uppercase" href="/">Contact us</a>
                          </li>

                        
                        </ul>
                        <div className={`form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
                    <input type="checkbox" className="form-check-input" id="switchbtn" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchDefault"  >{props.modeName}</label>
                        </div>
                      </div>
                    </div>
                  </nav>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Header;