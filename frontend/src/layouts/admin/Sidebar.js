import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faBookOpen, faBoxesPacking, faChartArea, faColumns, faEye, faTable, faTachometer, faUserGroup, } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {

     return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faTachometer} size="sm" /></div>
                        Dashboard
                    
                </Link>
                {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
                <Link className="nav-link collapsed" to="/admin/add-category">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faColumns} size="sm" /></div>
                      Kategória hozzáadása
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                  
                </Link>
                <Link className="nav-link collapsed" to="/admin/view-category">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faEye} size="sm" /></div>
                      Kategória nézet
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                  
                </Link>
                <Link className="nav-link collapsed" to="/admin/add-attribute">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faColumns} size="sm" /></div>
                      Attibutum hozzáadása
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                  
                </Link>
                <Link className="nav-link collapsed" to="/admin/view-attribute">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faEye} size="sm" /></div>
                      Attibutum nézet
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                  
                </Link>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <Link className="nav-link collapsed" to="/admin/profile" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faColumns} size="sm" /></div>
                       Termékek
                        <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                    
                </Link>
                <div className="collapse" id="collapseProduct" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/add-product">Termékek hozzáadása</Link>
                        <Link className="nav-link" to="/admin/view-product">Termékek megtekintése</Link>
                    </nav>
                </div>

                <Link className="nav-link collapsed" to="/admin/profile" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faColumns} size="sm" /></div>
                       Attributum érték
                        <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                    
                </Link>
                <div className="collapse" id="collapseProduct" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/add-attributevalue">Attributum érték hozzáadása</Link>
                        <Link className="nav-link" to="/admin/view-attributevalue">Attributum érték megtekintése</Link>
                    </nav>
                </div>
                
                <Link className="nav-link collapsed" to="/admin/orders">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faBoxesPacking} size="sm" /></div>
                      Rendelések
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                       
                </Link>
                <Link className="nav-link collapsed" to="/admin/view-orders">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faEye} size="sm" /></div>
                      Rendelések megtekintése
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                       
                </Link>

               
                <Link className="nav-link collapsed" to="/admin/profile">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faUserGroup} size="sm" /></div>
                       Profile
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                  
                </Link>
{/* 
                <Link className="nav-link collapsed" to="/admin/edit-profile">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faHammer} size="sm" /></div>
                       Profil szerkesztése
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                  
                </Link> */}

                
                <Link className="nav-link collapsed" to="/admin/view-profile">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faEye} size="sm" /></div>
                       Profil megtekintése
                       <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                  
                </Link>
                
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faBookOpen} size="sm" /></div>
                        Pages
                        <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                   
                </Link>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                Authentication
                                <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                            
                        </Link>
                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="login.html">Login</Link>
                                <Link className="nav-link" to="register.html">Register</Link>
                                <Link className="nav-link" to="password.html">Forgot Password</Link>
                            </nav>
                        </div>
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Error
                                <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown} size="sm" /></div>
                            
                        </Link>
                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="401.html">401 Page</Link>
                                <Link className="nav-link" to="404.html">404 Page</Link>
                                <Link className="nav-link" to="500.html">500 Page</Link>
                            </nav>
                        </div>
                    </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <Link className="nav-link" to="charts.html">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faChartArea} size="sm" /></div>
                        Charts
                   
                </Link>
                <Link className="nav-link" to="tables.html">
                        <div className="sb-nav-link-icon"><FontAwesomeIcon icon={faTable} size="sm" /></div>
                        Tables
                    
                </Link>
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Pizza admin
        </div>
    </nav>

       
        
        



     );

}

export default Sidebar;