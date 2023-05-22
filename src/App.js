import React, { useState } from "react";
import Form from "./Form";

function App() {
  const init = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(init);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   }
  // }, [formErrors, isSubmit]);

  return (
    <div className="App">
      <Form
        inputStyle="border p-2 rounded-md"
        formValues={formValues}
        setFormValues={setFormValues}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        errorStyle="text-xs text-red-600"
        btnStyle="w-full text-[#fff] font-semibold rounded-md py-2 px-4 bg-[#2b58bd]"
      />
    </div>
  );
}

export default App;
