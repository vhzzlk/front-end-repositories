import './index.css';
function Header(params) {
  return (
    <header className="header">
      <img className="header-logo" src="/logo192.png" alt="Logo" />
      <nav className="header-nav">
        <a className="nav-link" href="nav-link">
          {params.home}
        </a>
        <a className="nav-link" href="nav-link">
          {params.contact}
        </a>
      </nav>
      <div className="header-buttons">
        <button className="header-button">{params.singin}</button>
        <button className="header-button">{params.signout}</button>
      </div>
    </header>
  );
}
export default Header;
