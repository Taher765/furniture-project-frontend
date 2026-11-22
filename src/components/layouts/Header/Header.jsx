import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import "./Header.css";
function Header() {
  return (
    <Navbar expand="lg" className="shadow-sm navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          {" "}
          بيت الخشب{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">الرئيسية</Nav.Link>

            <Nav.Link href="#action2">المنتجات</Nav.Link>
            <Nav.Link href="#action2">تتبع الطلبات</Nav.Link>
            <NavDropdown title="جميع التصنيفات" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">المعيشخ</NavDropdown.Item>
              <NavDropdown.Item href="#action4">غرف موم</NavDropdown.Item>
              <NavDropdown.Item href="#action4">سرير</NavDropdown.Item>
              <NavDropdown.Item href="#action4">كراسي</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<FaUser />} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                الصفحه الشخصيه{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="btn btn-danger" href="#action5">
                تشجيل الحروج
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success btn-sm">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
