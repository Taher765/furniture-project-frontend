import { Col, Row } from "react-bootstrap";
// import ReactPaginate from "react-paginate";
import { useState } from "react";
import ProductsItems from "../../components/ProductsItems/ProductsItems";
import "./AllProducts.css";
import { Pagination } from "antd";
import Footer from "../../components/layouts/Footer/Footer";
function AllProducts() {
  const [radio, setRadio] = useState(null);

  const getValue = (e) => {
    setRadio(e.target.value);
    console.log(radio);
  };

  const handelPagnation = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="allProducts py-3">
        <div className="container-fluid">
          <Row>
            {/* STRAT FILTER  */}
            <Col sm={3} md={3} lg={3}>
              <div className="filter border rounded p-2 mb-3">
                <h3 className="main-heading">تصفيه</h3>
                <div className="radio-boxs">
                  <div className="form-group">
                    <input
                      type="radio"
                      id="1"
                      className="form-check-input me-3"
                      name="filter"
                      value={"drisengRoom"}
                      onChange={(e) => getValue(e)}
                    />
                    <label className="form-check-label" htmlFor="1">
                      غرف النوم
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      id="2"
                      className="form-check-input me-3"
                      name="filter"
                      value={"room"}
                      onChange={(e) => getValue(e)}
                    />
                    <label className="form-check-label" htmlFor="2">
                      المعيشه{" "}
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      id="3"
                      className="form-check-input me-3"
                      name="filter"
                      value={"bathrooom"}
                      onChange={(e) => getValue(e)}
                    />
                    <label className="form-check-label" htmlFor="3">
                      السفره
                    </label>
                  </div>
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">السعر من</label>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">السعر الي</label>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="form-group">
                  <input type="checkbox" className="form-check-input me-3" />
                  <label htmlFor="">المتوفر فقط</label>
                </div>
              </div>
            </Col>
            {/* ================ END FILTER =============== */}
            {/* ===========STRAT ALL PRODUCTS ============= */}
            <Col sm={9} md={9} lg={9}>
              <div className="products border  p-2 rounded">
                <ProductsItems
                  title="جميع المنتجات"
                  colSm={12}
                  colMd={6}
                  colLg={4}
                />
                <div className="my-3">
                  <Pagination
                    defaultCurrent={1}
                    total={100}
                    align={"center"}
                    onChange={handelPagnation}
                    showSizeChanger={false}
                    itemRender={(page, type, originalElement) =>
                      type === "prev"
                        ? "السابق"
                        : type === "next"
                          ? "التالي"
                          : originalElement
                    }
                  />
                </div>
              </div>
            </Col>
            {/* =========== END ALL PRODUCTS ============= */}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
