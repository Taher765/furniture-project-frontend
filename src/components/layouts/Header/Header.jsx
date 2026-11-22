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
function Header() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log("faaf");
  }, [setAuth]);
  return (
    <Navbar expand="lg" className="shadow-sm navbar">
      <Container fluid>
        <Link to={"/"}>
          <Navbar.Brand href="#" className="logo">
            بيت الخشب
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/"}>
              <Nav.Link href="#action1">الرئيسية</Nav.Link>
            </Link>
            <Link to={"/AllProducts"}>
              <Nav.Link href="#action2">المنتجات</Nav.Link>
            </Link>
            <Link to={"/Orders"}>
              <Nav.Link href="#action2">تتبع الطلبات</Nav.Link>
            </Link>

            <NavDropdown title="جميع التصنيفات" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">المعيشخ</NavDropdown.Item>
              <NavDropdown.Item href="#action4">غرف موم</NavDropdown.Item>
              <NavDropdown.Item href="#action4">سرير</NavDropdown.Item>
              <NavDropdown.Item href="#action4">كراسي</NavDropdown.Item>
            </NavDropdown>
            {auth ? (
              <NavDropdown title={<FaUser />} id="navbarScrollingDropdown">
                <Link to={"/User"}>
                  <NavDropdown.Item href="#action4">
                    الصفحه الشخصيه{" "}
                  </NavDropdown.Item>
                </Link>

                <NavDropdown.Divider />
                <NavDropdown.Item className="btn btn-danger" href="#action5">
                  تشجيل الحروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to={"/Login"}>
                <Nav.Link href="#action2">
                  <FiLogIn />
                </Nav.Link>
              </Link>
            )}

            <Link to={"/Cart"}>
              <Nav.Link href="#action2">
                <FaShoppingCart />
              </Nav.Link>
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
