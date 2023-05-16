import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import image from '../assets/images/logo-DH.png';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb'
import ContentRowMovies from './ContentRowMovies';
import ContentWrapper from './ContentWrapper'
import NotFound from './NotFound'
function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/Genres">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/last-movie">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Last Movie</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Movies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}
            {/*Aca se arman nuestras rutas*/}
            <Routes>
                <Route exact path='/Genres' element={<GenresInDb />} />
                <Route exact path='/last-movie' element={<LastMovieInDb />} />
                <Route exact path='/Movies' element={<ContentRowMovies />} />
                <Route exact path='/' element={<ContentWrapper />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </React.Fragment>
    )
}
export default SideBar;