import { Link } from 'react-router-dom';


export const NavBar = () => {

    return (
        <nav className="navbar bg-body-tertiary container">
            <div className="container-fluid">
            <Link className="navbar-brand" href="#">Total News</Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
}