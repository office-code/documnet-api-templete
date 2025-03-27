import { useState, useEffect } from "react";
import { omit } from "lodash";
const useForm = (callback) => {
  //Form values
  const [values, setValues] = useState({});
  const [isFormReset, setIsFormReset] = useState(false);
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});
  const [formname, setformname] = useState("");
  const resetForm = () => {
    setValues({});
    setErrors({});
    setIsFormReset(true);
  };

  const validate = (event, name, value) => {
    const trimmedValue = typeof value === 'string' ? value.trim() : value;
    //A function to validate each input values
    switch (name) {
      case "email":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            email: "Please Enter Your Email Address",
          });
        } else if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "eventemail":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            eventemail: "Please Enter Your Event Email Address",
          });
        } else if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            eventemail: "Enter a valid event email address",
          });
        } else {
          let newObj = omit(errors, "eventemail");
          setErrors(newObj);
        }
        break;
      case "tag":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            tag: "Please Enter Your Tag",
          });
        } else if (!new RegExp(/^[a-zA-Z0-9_]+$/).test(value)) {
          setErrors({
            ...errors,
            tag: "Only Enter Alphabet, Number and Underscore",
          });
        } else {
          let newObj = omit(errors, "tag");
          setErrors(newObj);
        }
        break;
      case "fname":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            fname: "Please Enter Your First Name",
          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            fname: "Enter only alphabet",
          });
        } else {
          let newObj = omit(errors, "fname");
          setErrors(newObj);
        }
        break;
      case "lname":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            lname: 'Please Enter Your Last Name',
          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            lname: 'Only Enter Alphabet',
          });
        } else {
          let newObj = omit(errors, "lname");
          setErrors(newObj);
        }
        break;
      case "eventname":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            eventname: "Please Enter Your Event Name",
          });
        }
        else {
          let newObj = omit(errors, "eventname");
          setErrors(newObj);
        }
        break;
      case "ticket_name":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            ticket_name: "Name is required.",
          });
        }
        else {
          let newObj = omit(errors, "ticket_name");
          setErrors(newObj);
        }
        break;
      case "quantity":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            quantity: 'Quantity is required.',
          });
        }
        else if (value < 1 || value > 500000) {
          setErrors({
            ...errors,
            quantity: 'Quantity must be between 1 and 500,000.',
          });
        }
        else {
          let newObj = omit(errors, "quantity");
          setErrors(newObj);
        }
        break;
      case "price":
        if (value.trim() < 1) {
          setErrors({
            ...errors,
            price: 'Price is required to make a paid ticket',
          });
        }
        else if (!new RegExp(/^\d+$/).test(value)) {
          setErrors({
            ...errors,
            price: 'Please enter a positive number.',
          });
        } else if (parseFloat(value) > 1000000) {
          setErrors({
            ...errors,
            price: 'Price must be less than $1,000,000',
          });
        } else {
          let newObj = omit(errors, "price");
          setErrors(newObj);
        }
        break;
      case "venuename":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            venuename: "Please Enter Your Venue Name",
          });
        }
        else {
          let newObj = omit(errors, "venuename");
          setErrors(newObj);
        }
        break;

      case "eventtitle":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            eventtitle: "Please Enter Your Title",
          });
        }
        else {
          let newObj = omit(errors, "eventtitle");
          setErrors(newObj);
        }
        break;
      case "organizer":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            organizer: "Filed is required",
          });
        }
        else {
          let newObj = omit(errors, "organizer");
          setErrors(newObj);
        }
        break;

      case "password":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            password: "Password required ",
          });
        }
        else if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(value)
        ) {
          setErrors({
            ...errors,
            password: "Password must be 8 characters and one digit and one special character",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
          setPassword(value);
        }
        break;
      case "confirmpassword":
        if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(value)
        ) {
          setErrors({
            ...errors,
            confirmpassword: "Password must be 8 characters and one digit and one special character",
          });
        } else if (value !== values.password) {
          setErrors({
            ...errors,
            confirmpassword: "Passwords do not match",
          });
        } else {
          let newObj = omit(errors, "confirmpassword");
          setErrors(newObj);
        }
        break;
      case "old_password":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            old_password: "Old Password required ",
          });
        } else {
          let newObj = omit(errors, "old_password");
          setErrors(newObj);
          setPassword(value);
        }
        break;
      case "Line1":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            Line1: 'Adderss required',
          });
        } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
          setErrors({
            ...errors,
            Line1: 'Adderss ', 
          });
        } else {
          let newObj = omit(errors, "Line1");
          setErrors(newObj);
        }
        break;
      case "eventwebsiteLink":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            eventwebsiteLink: 'Field is required',
          });
        } else if (
          !new RegExp(
            "^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
          ).test(value)
        ) {
          setErrors({
            ...errors,
            eventwebsiteLink: 'Invalid Website Link',

          });
        } else {
          let newObj = omit(errors, "eventwebsiteLink");
          setErrors(newObj);
        }
        break;
      case "answer":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            answer: "Field is required",
          });
        }
        else {
          let newObj = omit(errors, "answer");
          setErrors(newObj);
        }
        break;
      case "question":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            question: "Field is required",

          });
        }
        else {
          let newObj = omit(errors, "question");
          setErrors(newObj);
        }
        break;

      case "atitle":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            atitle: "Field is required",
          });
        }
        else {
          let newObj = omit(errors, "atitle");
          setErrors(newObj);
        }
        break;

      case "artist":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            artist: "Field is required",
          });
        }
        else {
          let newObj = omit(errors, "artist");
          setErrors(newObj);
        }
        break;

      case "adisc":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            adisc: "Field is required",
          });
        }
        else {
          let newObj = omit(errors, "adisc");
          setErrors(newObj);
        }
        break;
      case "summary":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            summary: "summary is required",
          });
        }
        else {
          let newObj = omit(errors, "summary");
          setErrors(newObj);
        }
        break;

      case "promocodename":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            promocodename: "Field is required",
          });
        }
        else {
          let newObj = omit(errors, "promocodename");
          setErrors(newObj);
        }
        break;

        
      case "discountpromo":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            discountpromo: "PostalCode required",
          });
        } else if (!new RegExp(/^\d+$/).test(value)) {
          setErrors({
            ...errors,
            discountpromo: 'Please enter a positive number.',
          });
        } else if (parseFloat(value) > 100) {
          setErrors({
            ...errors,
            discountpromo: 'discount promocode must be less then 100%',
          });
        }
        else {
          let newObj = omit(errors, "discountpromo");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  //A method to handle form inputs
  // const handleChange = (event) => {
  //   //To stop default events
  //   event.persist();
  //   let name = event.target.name;
  //   let val = event.target.value;
  //   if (event.target.required === true) {
  //     validate(event, name, val);
  //   } else {
  //     console.error("inside");
  //     let newObj = omit(errors, name);
  //     setErrors(newObj);
  //   }
  //   //Let's set these values in state
  //   setValues({
  //     ...values,
  //     [name]: val,
  //     [name + "event"]: event,
  //     event: event,
  //   });
  // };


  const handleChange = (event) => {

    //To stop default events
    event.persist();

    let name = event.target.name;
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.type === 'file' ? event.target.files[0] : event.target.value;


    if (event.target.required === true) {
      validate(event, name, val);
    } // Handle checkbox and radio button separately 
    else if (event.target.type === "checkbox" || event.target.type === "radio") {

      validate(event, name, val);
      setValues({
        ...values,
        [name]: val,
      });
    }
    else if (event.target.type === 'file') {
      validate(event, name, val);
      setValues({
        ...values,
        [name]: val,
      });
    }
    else {
      console.error("inside");
      let newObj = omit(errors, name);
      setErrors(newObj);
    }
    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
      [name + 'event']: event,
      event: event
    });

    //Update form values
    setValues({
      ...values,
      [name]: val,
    });

    // Trigger validation for confirm password whenever new password changes
    if (name === "password") {
      validateConfirmPassword(val, values.confirmpassword);
    }
  };



  const validateConfirmPassword = (newPassword, confirmPassword) => {
    if (confirmPassword && newPassword !== confirmPassword) {
      setErrors({
        ...errors,
        confirmpassword: "Passwords do not match",
      });
    } else {
      let newObj = omit(errors, "confirmpassword");
      setErrors(newObj);
    }
  };






  //A method to handle form inputs
  // const handleBlur = (event) => {
  //   //To stop default events
  //   event.persist();
  //   let name = event.target.name;
  //   let val = event.target.value;
  //   if (event.target.required === true) {
  //     validate(event, name, val);
  //   } else {
  //     let newObj = omit(errors, name);
  //     setErrors(newObj);
  //   }

  //   //Let's set these values in state
  //   setValues({
  //     ...values,
  //     [name]: val,
  //     [name + "event"]: event,
  //     event: event,
  //   });
  // };

  const handleBlur = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    if (event.target.required === true) {
      validate(event, name, val);
    }  // Handle checkbox and radio button separately 
    else if (event.target.type === "checkbox" || event.target.type === "radio") {
      validate(event, name, val);
      setValues({
        ...values,
        [name]: val,
      });
    }
    else {
      let newObj = omit(errors, name);
      setErrors(newObj);
    }

    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
      [name + 'event']: event,
      event: event
    });
  };
  // const handleSubmit = (event) => {
  //   if (event) event.preventDefault();
  //   setformname(event.target.name);
  //   if (Object.keys(errors).length === 0) {
  //     callback()
  //   }
  // };

  const handleSubmit = (event) => {
    if (event) event.preventDefault(); // Prevent default form submission

    setformname(event.target.name);
    if (callback) {
      callback(); // Invoke the provided callback function for form submission logic
    }
  };


  useEffect(() => {
    if (isFormReset) {
      setValues({});
      setErrors({});
      setIsFormReset(false);
    }
  }, [isFormReset]);


  // return {
  //   formname,
  //   values,
  //   errors,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   resetForm,
  //   setValues
  // };

  // return {
  //   formname,
  //   values,
  //   errors,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   resetForm,
  // };
  return {
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors,
    setValues,
    setErrors,
  };
};

export default useForm;




