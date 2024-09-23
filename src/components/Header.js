import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#FFF3C7'}}>
      <div className="container-fluid" style={{ marginLeft: '100px' }}>
        <a className="navbar-brand fw-bold" href="#">SummaryBuddy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginLeft: '270px' }}>
              <a className="nav-link fw-bold" href="#">Home</a>
            </li>
            <li className="nav-item" style={{ marginLeft: '270px' }}>
              <a className="nav-link fw-bold" href="#">Record</a>
            </li>
            <li className="nav-item" style={{ marginLeft: '250px' }}>
              <a className="nav-link fw-bold" href="#">Summary</a>
            </li>
            <li className="nav-item" style={{ marginLeft: '320px' }}>
              <a className="nav-link fw-bold" href="/">Sign in</a>
            </li>
          </ul>
          <form className="d-flex rounded" role="search" style={{ marginRight: '100px', backgroundColor: '#FC819E'}}>
            <button className="btn rounded fw-bold" type="submit" style={{ color: 'white' }}>Sign up</button>
          </form>
    </div>
  </div>
</nav>
  )
}
