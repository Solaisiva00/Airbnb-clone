import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav className="px-8 py-6 shadow-lg md:px-16">
      <img src={logo} alt="" />
    </nav>
  );
};

export default Navbar;
