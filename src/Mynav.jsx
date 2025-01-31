import reactLogo from './assets/react.svg'
export default function Mynav(){

    return(
        <>
    <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid justify-content-center">
    <div className="d-flex mx-auto">
    <button className="btn ps-0"><img src = {reactLogo} onClick={()=>window.open("https://react.dev/")}/></button>
    <a className="navbar-brand pt-2 pe-0" href="/memes">Navbar</a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home (Tenzies game)</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.youtube.com/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-info">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" onClick={()=>alert("You are an idiot!")}>Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    )
}