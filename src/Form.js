import React from "react";
import image1 from "./img/sss.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

const Form = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  isSubmit,
  setIsSubmit,
  inputStyle,
  errorStyle,
  btnStyle,
}) => {
  const onChangeFormValue = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-1/3 h-[90%] bg-[#2b58bd]/90 p-10 rounded-md">
        <img src={image1} alt="img" width={"300px"} />
      </div>
      <div className="w-1/3 h-[90%] bg-[#fff] px-28 py-5 rounded-md">
        <div className="text-center my-3">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="p-1 bg-[#8FFFAF] rounded-md">
              Signed in Successfully
            </div>
          ) : Object.keys(formErrors).length > 0 ? (
            <div className="p-1 bg-red-600 rounded-md">Sign in Failed</div>
          ) : null}
        </div>

        <div className="text-6xl text-center mb-5">
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            style={{ color: "#4373E5" }}
          />
        </div>

        <h1 className="text-4xl text-center">Register</h1>
        <p className="text-center mt-2 text-[11px] text-black/25 font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          voluptatem.
        </p>

        <form
          onSubmit={onSubmitForm}
          className="flex flex-col mt-8 mb-4 space-y-3"
        >
          <p className={errorStyle}>{formErrors.username}</p>
          <div className="flex flex-row">
            <Input
              type="text"
              name="username"
              value={formValues.username}
              className={inputStyle}
              placeholder="Username"
              onChange={onChangeFormValue}
              fullWidth={true}
              endAdornment={
                <InputAdornment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </InputAdornment>
              }
            />
          </div>

          <p className={errorStyle}>{formErrors.email}</p>
          <div className="flex flex-row">
            <Input
              type="email"
              name="email"
              value={formValues.email}
              className={inputStyle}
              placeholder="Email"
              onChange={onChangeFormValue}
              fullWidth={true}
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              }
            />
          </div>

          <p className={errorStyle}>{formErrors.password}</p>
          <div className="flex flex-row">
            <Input
              type="password"
              name="password"
              value={formValues.password}
              className={inputStyle}
              placeholder="Password"
              onChange={onChangeFormValue}
              fullWidth={true}
              endAdornment={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 448 512"
                >
                  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                </svg>
              }
            />
          </div>

          <div className="flex text-[11px] justify-between">
            <div className="flex text-black/50">
              <input type="checkbox" name="Remember-Me" />
              <p>Remember Me</p>
            </div>
            <p>
              <a className="text-[#2b58bd]/70 font-bold ml-2" href="null">
                Recovery Password
              </a>
            </p>
          </div>

          <div></div>
          <div></div>

          <button type="submit" className={btnStyle}>
            Submit
          </button>
          <div className="text-xs text-center">
            <p className="text-black/50">
              Don't have an account yet?{" "}
              <a className="text-[#2b58bd] font-bold ml-2" href="null">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
