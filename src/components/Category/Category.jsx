import { Col, Row } from "react-bootstrap";
import imageTest from "../../assets/images/catalog-5-00.jpg";
import "./Category.css";

function Category() {
  return (
    <div className="category px-3">
      <Row className="d-flex justify-content-center align-items-center text-center py-3">
        <Col sm={12} md={3} lg={2} className="item">
          <div className="p-2 rounded">
            <img src={imageTest} alt="" />
            <h6 className="mt-2 mb-0">نوع جديد</h6>
          </div>
        </Col>
        <Col sm={12} md={3} lg={2} className="item">
          <div className="p-2 rounded">
            <img src={imageTest} alt="" />
            <h6 className="mt-2 mb-0">نوع جديد</h6>
          </div>
        </Col>
        <Col sm={12} md={3} lg={2} className="item">
          <div className="p-2 rounded">
            <img src={imageTest} alt="" />
            <h6 className="mt-2 mb-0">نوع جديد</h6>
          </div>
        </Col>
        <Col sm={12} md={3} lg={2} className="item">
          <div className="p-2 rounded">
            <img src={imageTest} alt="" />
            <h6 className="mt-2 mb-0">نوع جديد</h6>
          </div>
        </Col>
        <Col sm={12} md={3} lg={2} className="item">
          <div className="p-2 rounded">
            <img src={imageTest} alt="" />
            <h6 className="mt-2 mb-0">نوع جديد</h6>
          </div>
        </Col>
        <Col sm={12} md={3} lg={2} className="item">
          <div className="p-2 rounded">
            <img src={imageTest} alt="" />
            <h6 className="mt-2 mb-0">نوع جديد</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Category;
