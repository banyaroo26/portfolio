const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-5 py-3 w-100">
            <div className="w-100 d-flex flex-wrap align-items-center justify-content-md-center justify-content-center gap-5">
                <a className="nav-link fs-6 text-light mx-md-3 mx-2 pb-1" style="border-bottom: solid 3px #000000;" href="index.html"><i className="fas fa-home text-dark"></i><span className="text-black ms-2 d-none d-md-inline" style="font-weight: 500;">Home</span></a>
                <a className="nav-link fs-6 text-light mx-md-3 mx-2 pb-1 nav-btn" href="./projects/1.html"><i className="fas fa-code text-dark"></i><span className="text-black ms-2 d-none d-md-inline" style="font-weight: 500;">Projects</span></a>
                <a className="nav-link fs-6 text-light mx-md-3 mx-2 pb-1 nav-btn" href="./game/dino-runner-redux-godot.html"><i className="fa-solid fa-gamepad text-dark"></i><span className="text-black ms-2 d-none d-md-inline" style="font-weight: 500;">Game</span></a>
            </div>
        </nav>
    )
}

export default Navbar