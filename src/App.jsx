import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="" className={isActive => isActive ? 'nav-link active' : 'nav-link'}>Pokedex</NavLink >
              </li>
              <li class="nav-item">
                <NavLink to="/" className={isActive => isActive ? 'nav-link active' : 'nav-link'}>Items</NavLink >
              </li>
              <li class="nav-item">
                <NavLink to="/" className={isActive => isActive ? 'nav-link active' : 'nav-link'}>Pokemon</NavLink >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Outlet />

      </div>

    </>




  )
}

export default App
