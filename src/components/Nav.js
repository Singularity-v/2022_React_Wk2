export default function Nav() {
    return (
        <nav className="navbar navbar-expand-md nav__bg">
            <div className="container ">
            <a className="navbar-brand nav__brand" href="#"><img src="image/me.png" alt=""/></a>
            
            <ul className="navbar-nav col-lg-8 center-nav" >
                <li className="nav-item">
                <a className="nav-link" href="#">關於課程</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">關於我</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">聯絡方式</a>
                </li>
            </ul>

            <a className="navbar-brand nav__brand" href="#"><img src="image/heart.png" alt=""/></a>

            </div>
        </nav>
    );
}