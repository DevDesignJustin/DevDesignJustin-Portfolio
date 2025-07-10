const Nav = () => {
  return (
    <nav className="h-[60px] border-b border-white border-1px">
        <div className="container">
            <ul className="h-[60px]">
                <li className="nav-item logo">justin kim</li>
                <li className="nav-item flex-center"><a href="">./home</a></li>
                <li className="nav-item flex-center"><a href="">./projects</a></li>
                <li className="nav-item flex-center"><a href="">./contact-me</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav