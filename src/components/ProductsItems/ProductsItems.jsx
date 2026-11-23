import { Col, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsItems({
  title = "منتجاتنا",
  colSm,
  colMd,
  colLg,
}) {
  return (
    <div className="">
      <div className="container-fluid">
        <h3 className="main-heading">{title}</h3>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
          <Col sm={colSm} md={colMd} lg={colLg}>
            <ProductCard />
          </Col>
        </Row>
      </div>
    </div>
  );
}
