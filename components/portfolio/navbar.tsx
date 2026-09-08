export function Navbar() {
  return (
    <header className="site-nav">
      <a className="brand" href="/">
        <span>成斌</span>
        <span>EVAN CHENG</span>
      </a>
      <nav aria-label="主导航">
        <a href="/#projects">
          <span>项目</span>
          <span>PROJECTS</span>
        </a>
        <a href="/#about">
          <span>关于</span>
          <span>ABOUT</span>
        </a>
        <a href="/#contact">
          <span>联系</span>
          <span>CONTACT</span>
        </a>
      </nav>
    </header>
  );
}
