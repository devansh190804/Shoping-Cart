import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




const MyNavbar = () => {
    const cartProducts = useSelector(state => state.cart)
  return (
      <Navbar className="flex flex-wrap items-end justify-between">
      <NavbarBrand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">Products</span>
      </NavbarBrand>
           
        <NavbarLink as={Link} to="/cart">
        My bag {cartProducts.length}
    </NavbarLink>
    </Navbar>

  );
};

export default MyNavbar;
