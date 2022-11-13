import "./navbar.css";

const Navbar = () => {
    return (
<div className="navbar">
    <div className="navContainer">
        <span className="logo">danbooking</span>
        <div className="navItems">
            <button className="newButton">Register</button>
            <button className="newButton">Login</button>
        </div>
    </div>
</div>
    
        )
}

export default Navbar;