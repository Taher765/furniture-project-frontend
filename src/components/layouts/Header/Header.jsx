import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo.png";
function Header() {
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    console.log("faaf");
  }, [setAuth]);
  return (
    <Navbar expand="lg" className="shadow-sm navbar">
      <Container fluid>
        <Link to={"/"} className="logo navbar-brand">
          <img src={Logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to={"/AllProducts"}>
              المنتجات
            </Link>
            <Link className="nav-link" to={"/Orders"}>
              تتبع الطلبات
            </Link>

            <NavDropdown title="جميع التصنيفات" id="navbarScrollingDropdown">
              <Link className="nav-link" to={"ظ"}>
                تصنيف 1
              </Link>
              <Link className="nav-link" to={"ظ"}>
                تصنيف 1
              </Link>
              <Link className="nav-link" to={"ظ"}>
                تصنيف 1
              </Link>
              <Link className="nav-link" to={"ظ"}>
                تصنيف 1
              </Link>
              <Link className="nav-link" to={"ظ"}>
                تصنيف 1
              </Link>
            </NavDropdown>
            {auth ? (
              <NavDropdown title={<FaUser />} id="navbarScrollingDropdown">
                <Link className="nav-link" to={"/User"}>
                  الصفحه الشخصيه{" "}
                </Link>

                <NavDropdown.Divider />
                <Link
                  className="nav-link btn btn-danger"
                  to={"/Login"}
                  href="#action5"
                >
                  تشجيل الحروج
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to={"/Login"}>
                <FiLogIn />
              </Link>
            )}

            <Link className="nav-link" to={"/Cart"}>
              <FaShoppingCart />
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="بحث عن منتج ...."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success btn-sm btn-style">ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
