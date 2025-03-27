// import React, { useState } from "react";
// import useForm from "../pages/useform";
// import { Row, Col, Button, Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { trackPromise, usePromiseTracker } from "react-promise-tracker";
// import logo from "../assets/images/logo2.png";
// import lgn from "../assets/images/download.jpeg";
// export default function Signin() {
//   const { handleBlur, handleChange, values, errors, handleSubmit } = useForm(formRequest); //Final submit function
//   const [passwordShown, setPasswordShown] = useState(false);
//   const [rememberme, setrememberme] = useState(false);

//   const togglePasswordVisiblity = () => {
//     setPasswordShown(passwordShown ? false : true);
//   };
//   const eye = passwordShown ? (
//     <FaRegEye icon={FaRegEye} />
//   ) : (
//     <FaRegEyeSlash icon={FaRegEyeSlash} />
//   );
//   function formRequest() {
//     trackPromise(
//       axios
//         .post(`${process.env.REACT_APP_BASE_URL}/login`, {
//           email: values.email,
//           password: values.password,
//         })
//         .then((response) => {

//         })
//         .catch((error) => {

//         })
//     );
//   };

//   return (
//     <>
//       <section className="account-section bg_img sign-in-w">
//         <Container>
//           <div className="do-same">
//             <Row>
//               <Col lg={6} md={6} sm={12} xs={12}>
//                 <div className="img-signin-signup">
//                   <img src={logo} className="logo-sin" alt="logo" />
//                   <img src={lgn} alt="partyimage" className="sing-immm" />
//                 </div>
//               </Col>
//               <Col lg={6} md={6} sm={12} xs={12}>
//                 <div className="account-area">
//                   <Row>
//                     <Col lg={6} md={6} sm={12} xs={12}>
//                       <div className="login-header">
//                         <h6>Hello</h6>
//                         <h2>Welcome Back</h2>
//                       </div>
//                     </Col>
//                   </Row>
//                   <form
//                     className="account-form mt-4"
//                     onSubmit={handleSubmit}
//                   >
//                     <Row>
//                       <Col lg={12} md={12} sm={12} xs={12}>
//                         <div className="form-group">
//                           <label className="label">
//                             Email<span>*</span>
//                           </label>
//                           <input
//                             type="text"
//                             placeholder="Email"
//                             name="email"
//                             value={values.email || ""}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             required={true}
//                             className="form-control"
//                           />
//                           <div className="errorMsg">{errors.email}</div>
//                         </div>
//                       </Col>
//                       <Col lg={12} md={12} sm={12} xs={12}>
//                         <div className="form-group">
//                           <label className="label">
//                             Password<span>*</span>
//                           </label>
//                           <input
//                             type={passwordShown ? "text" : "password"}
//                             placeholder="Password"
//                             name="password"
//                             value={values.password || ""}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             required={true}
//                             className="form-control"
//                           />
//                           <span className="password">
//                             <i onClick={togglePasswordVisiblity}>{eye}</i>
//                           </span>
//                           <div className="errorMsg">{errors.password}</div>
//                         </div>
//                       </Col>
//                     </Row>
//                     <div className="l-g mt-2">
//                       <Row>
//                         <Col md={6} sm={6} xs={6}>
//                           <fieldset className="c-form__fieldset">
//                             <div className="c-form__group">
//                               <input
//                                 className="c-form__checkbox"
//                                 type="checkbox"
//                                 id="checkbox-1"
//                                 checked={rememberme}
//                                 value={rememberme}
//                                 onChange={(e) => {
//                                   setrememberme(!rememberme);
//                                 }}
//                               />
//                               <label htmlFor="checkbox-1" className="c-form__label">
//                                 <span className="c-form__label-text">
//                                   Remember Me!
//                                 </span>
//                               </label>
//                             </div>
//                           </fieldset>
//                         </Col>
//                         <Col md={6} sm={6} xs={6}>
//                           <div className="forgot">
//                             <NavLink to="/dashboard/forget-password">
//                               Forgot Password
//                             </NavLink>
//                           </div>
//                         </Col>
//                       </Row>
//                     </div>
//                     <div className="login-but-box">
//                       <Button
//                         className="login-butt"
//                         type="submit"
//                       >
//                         Sign In
//                       </Button>
//                     </div>
//                   </form>
//                   <div className="option">
//                     Don't Have an Account?
//                     <NavLink to="/dashboard/signup">Sign Up Now</NavLink>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// }












import React, { useState } from "react";
import useForm from "../pages/useform";
import { Container, Row, Col, Form, Button, Spinner, Card } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo2.png";
import bgImage from "../assets/images/images-3.jpeg"; // Add a nice background image

// import bgImage from "../assets/images/backgroung.jpeg"; // Add a nice background image

export default function Signin() {
  const { handleBlur, handleChange, values, errors, handleSubmit } = useForm(formRequest); //Final submit function
  const [passwordShown, setPasswordShown] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

    function formRequest() {
    // trackPromise(
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {

        })
        .catch((error) => {

        })
    // );
  };



  return (
    <section
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="p-4 shadow-lg border-0" style={{ backdropFilter: "blur(30px)", background: "rgba(255, 255, 255, 0.8)" }}>
              <div className="text-center mb-4">
                <img src={logo} alt="Logo" style={{ width: "120px" }} />
                <h3 className="mt-2">Welcome Back</h3>
                <p className="text-muted">Sign in to continue</p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="input-form-box">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={values.email || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}
                  />
                  <div className="errorMsg">{errors.email}</div>
                </Form.Group>

                <Form.Group className="input-form-box">
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      className="position-relative"
                      type={passwordShown ? "text" : "password"}
                      placeholder="Enter your password"
                      name="password"
                      value={values.password || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                    />
                    <span
                      onClick={togglePasswordVisiblity}
                      style={{
                        position: "absolute",
                        top: "40%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                   <div className="errorMsg">{errors.password}</div>
                  </div>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Check
                    className="c-form__checkbox"
                    type="checkbox"
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    value={rememberMe}
                  />
                  <NavLink to="/forget-password" className="text-decoration-none">
                    Forgot Password?
                  </NavLink>
                </div>

                <Button type="submit" className="login-butt w-100" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Sign In"}
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Don't have an account? &nbsp;	
                  <NavLink to="/signup" className="fw-bold">
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}






































































































































// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Spinner, Card } from "react-bootstrap";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import logo from "../assets/images/logo2.png";

// export default function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordShown, setPasswordShown] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const togglePasswordVisiblity = () => {
//     setPasswordShown(!passwordShown);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, { email, password });
//       console.log("Login successful:", response.data);
//     } catch (err) {
//       setError("Invalid email or password.");
//     }
    
//     setLoading(false);
//   };

//   return (
//     <section className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6} lg={5}>
//             <Card className="p-4 shadow-lg border-0">
//               <div className="text-center mb-4">
//                 <img src={logo} alt="Logo" style={{ width: "120px" }} />
//                 <h3 className="mt-2">Welcome Back</h3>
//                 <p className="text-muted">Sign in to continue</p>
//               </div>
//               <Form onSubmit={handleSubmit}>
//                 {error && <div className="alert alert-danger">{error}</div>}

//                 <Form.Group className="mb-3">
//                   <Form.Label>Email Address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Password</Form.Label>
//                   <div className="position-relative">
//                     <Form.Control
//                       type={passwordShown ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <span
//                       onClick={togglePasswordVisiblity}
//                       style={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "10px",
//                         transform: "translateY(-50%)",
//                         cursor: "pointer",
//                       }}
//                     >
//                       {passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}
//                     </span>
//                   </div>
//                 </Form.Group>

//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <Form.Check
//                     type="checkbox"
//                     label="Remember Me"
//                     checked={rememberMe}
//                     onChange={() => setRememberMe(!rememberMe)}
//                   />
//                   <NavLink to="/forgot-password" className="text-decoration-none">
//                     Forgot Password?
//                   </NavLink>
//                 </div>

//                 <Button type="submit" className="w-100" variant="primary" disabled={loading}>
//                   {loading ? <Spinner animation="border" size="sm" /> : "Sign In"}
//                 </Button>
//               </Form>

//               <div className="text-center mt-3">
//                 <p>
//                   Don't have an account?{" "}
//                   <NavLink to="/signup" className="fw-bold">
//                     Sign Up
//                   </NavLink>
//                 </p>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }





