import { Container } from "react-bootstrap";
import "./LoginForm.css";
import Form from "react-bootstrap/Form";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("الايميل مطلوب");
      console.log(error);
      return;
    }
    if (!password) {
      setError("كلمة المرور مطلوبه ");
      console.log(error);
      return;
    }
    console.log(email, password);
  };

  return (
    <>
      <section className="login">
        <Container className="d-flex flex-column h-100 justify-content-center align-items-center">
          <div className="title">
            <img src={Logo} height={80} width={120} alt="" />
            <p>اثاث يلهم بيتك</p>
          </div>
          <div className="loginSection shadow p-4 rounded">
            <h1>تسجيل الدخول</h1>
            <p>مرحبا لعودتك! يرجي تسجل الدخول لمتابعه التسوق</p>
            <Form className="mb-2">
              <div className="form-group">
                <label htmlFor="email">البريد الالكتروني</label>
                <div className="devEmail">
                  <MdOutlineMailOutline className="icon" />
                  <input
                    id="email"
                    type="text"
                    className="form-control ps-5"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">البريد الالكتروني</label>
                <div className="devEmail">
                  <RiLockPasswordFill className="icon" />
                  <input
                    id="password"
                    type="password"
                    className="form-control ps-5"
                    placeholder="ادخل كلمه المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <p className="text-right">
                <Link to={"/Forgot-Password"} className="forgotLink">
                  نسيت كلمه المرور؟
                </Link>
              </p>
              <button onClick={handelSubmit} className=" login-btn">
                دخول
              </button>
            </Form>
            <span className="">ليس لديك حساب </span>{" "}
            <Link className="registerLink" to={"/Register"}>
              انشاء حساب{" "}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default LoginForm;
