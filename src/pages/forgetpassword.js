// import React, { useState } from "react";
// import { Row, Col, Button, Container } from "react-bootstrap";
// import logo from "../assets/images/logo2.png";
// import lgn from "../assets/images/lgn.png";
// import { trackPromise, usePromiseTracker } from "react-promise-tracker";
// import { ThreeDots } from "react-loader-spinner";
// import { NavLink, useNavigate } from "react-router-dom";
// // import { FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
// import { BsArrowLeft } from "react-icons/bs";
// import axios from "axios";
// import { toast } from "react-toastify";
// export default function Forgetpassword() {
//   const navigate = useNavigate();
//   const { promiseInProgress } = usePromiseTracker();
//   const [fields, setFields] = useState({});
//   const [errors, setErrors] = useState({});
//   const showToastMessageone = (data) => {
//     toast.error(data, {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };
//   const showToastMessage = (data) => {
//     toast.success(data, {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };
//   const handleChange = (e) => {
//     const updatedFields = {
//       ...fields,
//       [e.target.name]: e.target.value,
//     };
//     setFields(updatedFields);
//   };

//   const submitUserRegistrationForm = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       apicalling();
//     }
//   };
//   const apicalling = () => {
//     trackPromise(
//       axios
//         .post(`${process.env.REACT_APP_BASE_URL}/forgetpassword`, {
//           email: fields.emailid,
//         })
//         .then((response) => {
//           if (response.status === 200) {
//             showToastMessage(response.data.message);
//             navigate("/Resetpassword");
//             setFields({
//               emailid: "",
//             });
//           }
//         })
//         .catch((error) => {
//           if (error.response.status === 422) {
//             showToastMessageone(error.response.data.message);
//           }
//         })
//     );
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     let formIsValid = true;
//     if (!fields["emailid"]) {
//       formIsValid = false;
//       newErrors["emailid"] = "*Please enter your email Address.";
//     }
//     if (typeof fields["emailid"] !== "undefined") {
//       const pattern = new RegExp(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//       if (!pattern.test(fields["emailid"])) {
//         formIsValid = false;
//         newErrors["emailid"] = "*Please enter a valid email.";
//       }
//     }
//     setErrors(newErrors);
//     return formIsValid;
//   };

//   return (
//     <section className="account-section bg_img sign-in-w">
//       <Container>
//         <div className="do-same mt-5">
//           <Row>
//             <Col lg={6} md={6} sm={12} xs={12}>
//               <div className="img-signin-signup">
//                 <img src={logo} className="logo-sin" alt="logo" />
//                 <img src={lgn} alt="partyimage" className="sing-immm" />
//               </div>
//             </Col>
//             <Col lg={6} md={6} sm={12} xs={12}>
//               <div className="account-area mt-2 mb-5">
//                 <div className="login-header mb-5">
//                   <h2>Forgot Password</h2>
//                   <p className=" mb-3">
//                     Enter Your Email And We'll Send You a Link To Reset Your
//                     Password
//                   </p>
//                 </div>

//                 <form
//                   className="account-form"
//                   onSubmit={submitUserRegistrationForm}
//                 >
//                   <Col lg={12} md={12} sm={12} xs={12}>
//                     <div className="form-group">
//                       <label className="label">
//                         Email<span>*</span>
//                       </label>

//                       <input
//                         type="text"
//                         placeholder="Enter Your Email"
//                         name="emailid"
//                         value={fields.emailid}
//                         onChange={handleChange}
//                         className="form-control"
//                       />
//                       <div className="errorMsg">{errors.emailid}</div>
//                     </div>
//                   </Col>
//                   <div className="login-but-box mt-5 mb-5">
//                     {promiseInProgress === true ? (
//                       <div
//                         className="spinner"
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignIitems: "center",
//                           height: "50px",
//                         }}
//                       >
//                         <ThreeDots
//                              height="60"
//                              width="60"
//                              color="#ffc107"
//                           ariaLabel="circles-loading"
//                           wrapperStyle={{}}
//                           wrapperclassName=""
//                           visible={true}
//                         />
//                       </div>
//                     ) : (
//                       <>
//                         <Button className="login-butt" type="submit">
//                           Send
//                         </Button>
//                       </>
//                     )}
//                   </div>
//                   <div className="back-to-home mt-5">
//                     <span>
//                       <BsArrowLeft />
//                     </span>
//                     <NavLink to="/dashboard/login">Back To Login</NavLink>
//                   </div>
//                 </form>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </section>
//   );
// }











import React, { useState } from "react";
import useForm from "../pages/useform";
import { Container, Row, Col, Form, Button, Spinner, Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo2.png";
import bgImage from "../assets/images/images-3.jpeg"; // Add a nice background image

export default function Forgetpassword() {
  const { handleBlur, handleChange, values, errors, handleSubmit } = useForm(formRequest); //Final submit function
  const [loading, setLoading] = useState(false);

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
                <h3 className="mt-2">Forgot Password</h3>
                <p className="text-muted">Enter Your Email And We'll Send You a Link To Reset Your Password</p>
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

          
                <Button type="submit" className="login-butt w-100" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Send"}
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                <BsArrowLeft /> &nbsp;	
                  <NavLink to="/login" className="fw-bold">Back To Login</NavLink>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

