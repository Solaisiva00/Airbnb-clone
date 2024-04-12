import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="px-8 py-6 shadow-lg md:px-16 sticky top-0 bg-white z-30">
      <img src={logo} alt="" />
    </nav>
  );
};

export default Navbar;
