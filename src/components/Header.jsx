function Header() {
  return (
     <header className="header">
    <div className="logo">
       <span className="logo-icon"></span><img src="planetlogo.png" alt="Planet Logo" width={100} />
       <div className="logo-text">
          <span className="logo-name">planet</span>
          <span className="logo-sub">creative world</span>
        </div>
      </div>
    </header>
  )
}

export default Header