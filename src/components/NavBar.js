import {React} from 'react'
import {Link, useLocation} from 'react-router-dom'


const NavBar=()=> {
  const location=useLocation();
  const {pathname}=location;
  const splitLocation=pathname.split("/")
 

 
    return (
      <div>
        <nav className="navbar p-sticky navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>News Hub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${splitLocation[1]==="" ? "active":""}`} aria-current="page" to={"/"}>Home</Link>
        </li>
        
             <li className="nav-item">
          <Link className={`nav-link ${splitLocation[1]==="business" ? "active":""}`} to={"/business"}>Business</Link></li>
             <li className="nav-item">
          <Link className={`nav-link ${splitLocation[1]==="entertainment" ? "active":""}`} to={"/entertainment"}>Entertainment</Link></li>
             <li className="nav-item">
          <Link className={`nav-link ${splitLocation[1]==="health" ? "active":""}`} to={"/health"}>Health</Link></li>
             <li className="nav-item">
          <Link className={`nav-link ${splitLocation[1]==="science" ? "active":""}`} to={"/science"}>Science</Link></li>
             <li className="nav-item">
          <Link className={`nav-link ${splitLocation[1]==="sports" ? "active":""}`} to={"/sports"}>Sports</Link></li>
             <li className="nav-item">
          <Link className={`nav-link ${splitLocation[1]==="technology" ? "active":""}`} to={"/technology"}>Technology</Link></li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
        
      </div>
    )
  }
  export default NavBar;

