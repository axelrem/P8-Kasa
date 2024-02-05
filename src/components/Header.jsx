function Header() {
  return (
    <div className="header-container">
      <img className="logo-header" src="../assets/LOGO.svg" alt="Logo" />
      <div className="nav-container">
        <a href="../pages/Home/App.jsx" className="link-header">
          Accueil
        </a>
        <a href="../pages/Apropos.jsx" className="link-header">
          A propos
        </a>
      </div>
    </div>
  );
}

export default Header;
