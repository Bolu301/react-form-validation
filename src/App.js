import React, { useState, useEffect } from "react";
import Formval from "./Formval";

function App() {
  const init = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(init);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  });

  return (
    <Formval
      inputStyle="border p-2 rounded-md"
      formValues={formValues}
      setFormValues={setFormValues}
      formErrors={formErrors}
      setFormErrors={setFormErrors}
      isSubmit={isSubmit}
      setIsSubmit={setIsSubmit}
      errorStyle="text-xs text-red-600"
    />
  );
}

export default App;
