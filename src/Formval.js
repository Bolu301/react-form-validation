import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formval = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  isSubmit,
  setIsSubmit,
  inputStyle,
  errorStyle,
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
      <div className="w-96 bg-[#DFFF8F] p-10 rounded-md">
        <div className="text-center mb-5">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="p-1 bg-[#8FFFAF] rounded-md">
              {" "}
              Signed in Successfully
            </div>
          ) : (
            <div className=""></div>
          )}
        </div>
        <h1 className="text-4xl text-center">
          <FontAwesomeIcon
            icon="fa-solid fa-user"
            style={{ color: "#000000" }}
          />{" "}
          Register
        </h1>

        <form
          onSubmit={onSubmitForm}
          className="flex flex-col mt-8 mb-4 space-y-4"
        >
          <label>
            <FontAwesomeIcon
              icon="fa-solid fa-pen"
              style={{ color: "#000000" }}
            />{" "}
            Username
          </label>

          <input
            type="text"
            name="username"
            value={formValues.username}
            className={inputStyle}
            placeholder="Enter your Name"
            onChange={onChangeFormValue}
          />
          <p className={errorStyle}>{formErrors.username}</p>

          <label>
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              style={{ color: "#000000" }}
            />{" "}
            E-mail
          </label>

          <input
            type="email"
            name="email"
            value={formValues.email}
            className={inputStyle}
            placeholder="Enter your Email"
            onChange={onChangeFormValue}
          />
          <p className={errorStyle}>{formErrors.email}</p>

          <label>
            <FontAwesomeIcon
              icon="fa-solid fa-lock"
              style={{ color: "#000000" }}
            />{" "}
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formValues.password}
            className={inputStyle}
            placeholder="Enter your Password"
            onChange={onChangeFormValue}
          />
          <p className={errorStyle}>{formErrors.password}</p>

          <div className="text-center">
            <button
              type="submit"
              className="font-semibold rounded-md py-2 px-4 bg-[#8FFFAF]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default formval;
