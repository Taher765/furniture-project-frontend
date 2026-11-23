import { Col, Row } from "react-bootstrap";
import imageTest from "../../assets/images/catalog-5-00.jpg";
import "./Category.css";

function Category() {
  return (
    <div className="category py-2">
      <div className="container-fluid">
        <h3 className="main-heading">التصنيفات</h3>
        <Row className="d-flex justify-content-center align-items-center text-center ">
          <Col sm={6} md={3} lg={2} className="item mb-2">
            <div className="p-2 rounded">
              <img src={imageTest} alt="" />
              <h6 className="mt-2 mb-0">نوع جديد</h6>
            </div>
          </Col>
          <Col sm={6} md={3} lg={2} className="item mb-2">
            <div className="p-2 rounded">
              <img src={imageTest} alt="" />
              <h6 className="mt-2 mb-0">نوع جديد</h6>
            </div>
          </Col>
          <Col sm={6} md={3} lg={2} className="item mb-2">
            <div className="p-2 rounded">
              <img src={imageTest} alt="" />
              <h6 className="mt-2 mb-0">نوع جديد</h6>
            </div>
          </Col>
          <Col sm={6} md={3} lg={2} className="item mb-2">
            <div className="p-2 rounded">
              <img src={imageTest} alt="" />
              <h6 className="mt-2 mb-0">نوع جديد</h6>
            </div>
          </Col>
          <Col sm={6} md={3} lg={2} className="item mb-2">
            <div className="p-2 rounded">
              <img src={imageTest} alt="" />
              <h6 className="mt-2 mb-0">نوع جديد</h6>
            </div>
          </Col>
          <Col sm={6} md={3} lg={2} className="item mb-2">
            <div className="p-2 rounded">
              <img src={imageTest} alt="" />
              <h6 className="mt-2 mb-0">نوع جديد</h6>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Category;
