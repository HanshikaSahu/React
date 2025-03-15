import brandLogo from "../assets/images/brand_logo.svg";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={brandLogo} alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navbar;