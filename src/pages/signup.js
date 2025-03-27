// import React, { useState } from "react";
// // import Termsconditions from "./Terms&conditions";
// import { Row, Col, Button, Container } from "react-bootstrap";
// import { trackPromise, usePromiseTracker } from "react-promise-tracker";
// import { ThreeDots } from "react-loader-spinner";
// import useForm from "./useform";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { BsArrowLeft } from "react-icons/bs";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import logo from "../assets/images/logo2.png";
// import lgn from "../assets/images/lgn.png";
// export default function Signup() {

//   //loder
//   const { promiseInProgress } = usePromiseTracker();

//   // hooks
//   const navigate = useNavigate();

//   // useform function
//   const { handleBlur, handleChange, values, errors, handleSubmit, resetForm } = useForm(formRequest); //Final submit function

//   //state
//   const [mobilenumber, setmobilenumber] = useState("");
//   const [valid, setvalid] = useState(false);
//   const [mobilevalid, setmobilevalid] = useState(false);
//   const [mobilevalidationerror, setmobilevalidationerror] = useState("");

//   const showToastMessage = (data) => {
//     toast.success(data, {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };
//   const showToastMessageone = (data) => {
//     toast.error(data, {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };




//   const [passwordShown, setPasswordShown] = useState(false);
//   const togglePasswordVisiblity = () => {
//     setPasswordShown(passwordShown ? false : true);
//   };
//   const eye = passwordShown ? (
//     <FaRegEye icon={FaRegEye} />
//   ) : (
//     <FaRegEyeSlash icon={FaRegEyeSlash} />
//   );
//   const [passwordShown1, setPasswordShown1] = useState(false);
//   const togglePasswordVisiblity1 = () => {
//     setPasswordShown1(passwordShown1 ? false : true);
//   };
//   const eye1 = passwordShown1 ? (
//     <FaRegEye icon={FaRegEye} />
//   ) : (
//     <FaRegEyeSlash icon={FaRegEyeSlash} />
//   );
//   const mobilevalidation = (mobile) => {
//     if (!new RegExp(/^[0-9+].{6,12}$/).test(mobile)) {
//       setmobilevalidationerror("Please Enter A valid Mobile Number");
//       setmobilevalid(false);
//     } else {
//       setmobilevalidationerror("");
//       setmobilevalid(true);
//     }
//   };


//   // submit form function api call
//   function formRequest() {
//     trackPromise(
//       axios
//         .post(`${process.env.REACT_APP_BASE_URL}/registration`, {
//           firstname: values.fname,
//           lastname: values.lname,
//           email: values.email,
//           password: values.password,
//           mobile: mobilenumber,
//         })
//         .then((response) => {
//           if (response.status === 200) {
//             showToastMessage(response.data.message);

//             resetForm();
//             setmobilenumber("");
//           }
//         })
//         .catch((error) => {

//         })
//     );
//   }

//   return (
//     <>
//       <section className="account-section bg_img sign-up">
//         <Container>
//           <div className="do-same">
//             <Row>
//               <Col lg={5} md={5} sm={12} xs={12}>
//                 <div className="img-signin-signup">
//                   <img src={logo} className="logo-sin" alt="logo" />
//                   <img src={lgn} alt="partyimage" className="sing-immm" />
//                 </div>
//               </Col>
//               <Col lg={7} md={7} sm={12} xs={12}>
//                 <div className="account-area">
//                   <Row className="mb-3">
//                     <Col lg={8} md={8}>
//                       <div className="login-header mb-2">
//                         <h2>Create An Account</h2>
//                       </div>
//                     </Col>

//                   </Row>
//                   <form className="account-form" onSubmit={handleSubmit}>
//                     <Row>
//                       <Col lg={6} md={6} sm={12} xs={12}>
//                         <div className="form-group">
//                           <label className="label">
//                             First Name<span>*</span>
//                           </label>
//                           <input
//                             type="text"
//                             placeholder="Name"
//                             name="fname"
//                             value={values.fname || ""}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             required={true}
//                             autoComplete="off"
//                             className="form-control"
//                           />
//                           {errors.fname && (
//                             <p className="errorMsg">{errors.fname}</p>
//                           )}
//                         </div>
//                       </Col>
//                       <Col lg={6} md={6} sm={12} xs={12}>
//                         <div className="form-group">
//                           <label className="label">
//                             Last Name<span>*</span>
//                           </label>
//                           <input
//                             type="text"
//                             placeholder="Last Name"
//                             name="lname"
//                             value={values.lname || ""}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             required={true}
//                             autoComplete="off"
//                             className="form-control"
//                           />
//                           {errors.lname && (
//                             <p className="errorMsg">{errors.lname}</p>
//                           )}
//                         </div>
//                       </Col>
//                       <Col lg={6} md={6} sm={12} xs={12}>
//                         <div className="form-group">
//                           <label className="label">
//                             Mobile Number<span>*</span>
//                           </label>
//                           <PhoneInput
//                             country={"us"}
//                             value={mobilenumber}
//                             onChange={(phone, value) => {
//                               setmobilenumber(phone);
//                               mobilevalidation(phone);
//                             }}
//                             prefix="+"
//                             inputProps={{
//                               name: "phone",
//                               required: true,
//                               autoFocus: false,
//                               autoComplete: "off",
//                               style: {
//                                 marginLeft: "0px",
//                                 width: "100%",
//                                 borderRadius: "4px"
//                                 , height: "44px"
//                               },
//                             }}
//                             isValid={(validmobilenumber) => {
//                               if (
//                                 !new RegExp(/^[0-9+].{6,12}$/).test(
//                                   validmobilenumber
//                                 )
//                               ) {
//                                 setvalid(false);

//                                 return false;
//                               } else {
//                                 setvalid(true);

//                                 return true;
//                               }
//                             }}
//                           />
//                           <span>
//                             {mobilevalid ? (
//                               <></>
//                             ) : (
//                               <>
//                                 <p className="errorMsg">
//                                   {mobilevalidationerror}
//                                 </p>
//                               </>
//                             )}
//                           </span>
//                         </div>
//                       </Col>
//                       <Col lg={6} md={6} sm={12} xs={12}>
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
//                             autoComplete="off"
//                             className="form-control"
//                           />
//                           {errors.email && (
//                             <p className="errorMsg">{errors.email}</p>
//                           )}
//                         </div>
//                       </Col>
//                       <Col lg={6} md={6} sm={12} xs={12}>
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
//                             autoComplete="off"
//                             className="form-control"
//                           />
//                           <span className="password">
//                             <i onClick={togglePasswordVisiblity}>{eye}</i>
//                           </span>
//                           {errors.password && (
//                             <p className="errorMsg">{errors.password}</p>
//                           )}
//                         </div>
//                       </Col>
//                       <Col lg={6} md={6} sm={12} xs={12}>
//                         <div className="form-group">
//                           <label className="label">
//                             Confirm Password<span>*</span>
//                           </label>
//                           <input
//                             type={passwordShown1 ? "text" : "password"}
//                             placeholder="Confirm Password"
//                             name="confirmpassword"
//                             value={values.confirmpassword || ""}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             required={true}
//                             autoComplete="off"
//                             className="form-control"
//                           />
//                           <span className="password">
//                             <i onClick={togglePasswordVisiblity1}>{eye1}</i>
//                           </span>
//                           {errors.confirmpassword && (
//                             <p className="errorMsg">{errors.confirmpassword}</p>
//                           )}
//                         </div>
//                       </Col>
//                     </Row>
//                     <div className="login-but-box">
//                       {promiseInProgress === true ? (
//                         <div
//                           className="spinner"
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignIitems: "center",
//                             height: "50px",
//                           }}
//                         >
//                           <ThreeDots
//                             height="60"
//                             width="60"
//                             color="#ffc107"
//                             ariaLabel="circles-loading"
//                             wrapperStyle={{}}
//                             wrapperclassName=""
//                             visible={true}
//                           />
//                         </div>
//                       ) : (
//                         <>
//                           <Button
//                             className="login-butt"
//                             type="submit"
//                           >
//                             Sign Up
//                           </Button>
//                         </>
//                       )}
//                     </div>
//                   </form>
//                   <div className="row">
//                     <div className="col-md-4">
//                       {/* <div className="back-to-home">
//                         <span>
//                           <BsArrowLeft />
//                         </span>
//                         <NavLink to="/">Back</NavLink>
//                       </div> */}
//                     </div>
//                     <div className="col-md-8">
//                       <div className="option">
//                         Already have an account?
//                         <NavLink to="/login">Sign In</NavLink>
//                       </div>
//                     </div>
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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Signup() {
  const { handleBlur, handleChange, values, errors, handleSubmit } = useForm(formRequest); //Final submit function


  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
    //state
  const [mobilenumber, setmobilenumber] = useState("");
  const [valid, setvalid] = useState(false);
  const [mobilevalid, setmobilevalid] = useState(false);
  const [mobilevalidationerror, setmobilevalidationerror] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(!passwordShown1);
  };
 

  const mobilevalidation = (mobile) => {
    if (!new RegExp(/^[0-9+].{6,12}$/).test(mobile)) {
      setmobilevalidationerror("Please Enter A valid Mobile Number");
      setmobilevalid(false);
    } else {
      setmobilevalidationerror("");
      setmobilevalid(true);
    }
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
          <Col md={6} lg={6}>
            <Card className="p-4 shadow-lg border-0" style={{ backdropFilter: "blur(30px)", background: "rgba(255, 255, 255, 0.8)" }}>
              <div className="text-center mb-4">
                <img src={logo} alt="Logo" style={{ width: "120px" }} />
                <h3 className="mt-2">Create An Account</h3>
                {/* <p className="text-muted">Sign in to continue</p> */}
              </div>
              <Form onSubmit={handleSubmit}>

                <Row>

                  <Col lg={6}>
                    <Form.Group className="input-form-box">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="fname"
                        value={values.fname || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <div className="errorMsg">{errors.fname}</div>
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="input-form-box">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="lname"
                        value={values.lname || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <div className="errorMsg">{errors.lname}</div>
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="input-form-box">
                    <Form.Label>Mobile Number</Form.Label>

                      <PhoneInput
                        country={"us"}
                        value={mobilenumber}
                        onChange={(phone, value) => {
                          setmobilenumber(phone);
                          mobilevalidation(phone);
                        }}
                        prefix="+"
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: false,
                          autoComplete: "off",
                          style: {
                            marginLeft: "0px",
                            width: "100%",
                            borderRadius: "4px"
                            , height: "44px"
                          },
                        }}
                        isValid={(validmobilenumber) => {
                          if (
                            !new RegExp(/^[0-9+].{6,12}$/).test(
                              validmobilenumber
                            )
                          ) {
                            setvalid(false);

                            return false;
                          } else {
                            setvalid(true);

                            return true;
                          }
                        }}
                      />
                      <span>
                        {mobilevalid ? (
                          <></>
                        ) : (
                          <>
                            <p className="errorMsg">
                              {mobilevalidationerror}
                            </p>
                          </>
                        )}
                      </span>
                    </Form.Group>

                  </Col>

                  <Col lg={6}>
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
                  </Col>

                  <Col lg={6}>
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
                             fontSize: "15px",
                            fontWeight: "600"
                          }}
                        >
                          {passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                        <div className="errorMsg">{errors.password}</div>

                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="input-form-box">
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          className="position-relative"
                          type={passwordShown1 ? "text" : "password"}
                          placeholder="Confirm Password"
                          name="confirmpassword"
                          value={values.confirmpassword || ""}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                        />
                        <span
                          onClick={togglePasswordVisiblity1}
                          style={{
                            position: "absolute",
                            top: "40%",
                            right: "10px",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            fontSize: "15px",
                            fontWeight: "600"
                          }}
                        >
                          {passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                        <div className="errorMsg">{errors.confirmpassword}</div>

                      </div>
                    </Form.Group>
                  </Col>

                </Row>
                <Button type="submit" className="login-butt w-100 mt-4" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                Already have an account? &nbsp;
                  <NavLink to="/login" className="fw-bold">
                  Sign In                  
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


