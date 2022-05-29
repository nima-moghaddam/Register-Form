// Formik
import { Formik, Field, Form, ErrorMessage } from "formik";

// Validation
import { SignupSchema } from "./signUpSchema";

// UI
import InputWrapper from "./../UI/InputWrapper";

// 3rd Part Lib
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styles
const labelClass = "text-base font-thin text-gray-300 mb-1 ml-1";

const inputClass =
  "bg-gray-800 autofill:bg-gray-800 border border-gray-500/50 mx-1 rounded w-full outline-none text-sm py-2 md:py-3 text-gray-300 accent-gray-500/50 px-3";

const errorMessage = (msg) => (
  <div className="text-red-500 font-normal text-sm text-bold mt-2 ml-1">
    {msg}
  </div>
);

// Form Data
const provinceOptions = [
  { value: "", label: "select your city ..." },
  { value: "mashhad", label: "mashhad" },
  { value: "tehran", label: "tehran" },
  { value: "esfehan", label: "esfehan" },
  { value: "shiraz", label: "shiraz" },
];

const initialValues = {
  fullName: "",
  nationalCode: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
  gender: "male",
  province: "",
  terms: false,
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// toastify
const notify = (formData) => {
  toast(
    <>
      <span className="text-green-500 block">Form Data :</span>
      <span className="text-black">{formData}</span>
    </>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const FormHandler = () => {
  return (
    <div className="p-2 mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await sleep(500);
          const formData = JSON.stringify(values, null, 2);
          notify(formData);
        }}
        onReset
        validationSchema={SignupSchema}
      >
        <Form>
          <InputWrapper>
            <label htmlFor="fullName" className={labelClass}>
              Full Name
            </label>
            <Field
              name="fullName"
              id="fullName"
              className={`${inputClass} autofill:bg-gray-800`}
            />
            <ErrorMessage name="fullName">{errorMessage}</ErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="nationalCode" className={labelClass}>
              National Code
            </label>
            <Field
              name="nationalCode"
              id="nationalCode"
              className={inputClass}
            />
            <ErrorMessage name="nationalCode">{errorMessage}</ErrorMessage>
          </InputWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <InputWrapper>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <Field name="email" id="email" className={inputClass} />
              <ErrorMessage name="email">{errorMessage}</ErrorMessage>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <Field name="phone" id="phone" className={inputClass} />
              <ErrorMessage name="phone">{errorMessage}</ErrorMessage>
            </InputWrapper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <InputWrapper>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <Field
                name="password"
                id="password"
                className={inputClass}
              />
              <ErrorMessage name="password">{errorMessage}</ErrorMessage>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="passwordConfirmation" className={labelClass}>
                Confirm password
              </label>
              <Field
                name="passwordConfirmation"
                id="passwordConfirmation"
                className={inputClass}
              />
              <ErrorMessage name="passwordConfirmation">
                {errorMessage}
              </ErrorMessage>
            </InputWrapper>
          </div>
          <div className="flex flex-row mb-6">
            <div role="group" aria-labelledby="my-radio-group">
              <label className={`${labelClass} mr-5 cursor-pointer`}>
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                  className="accent-indigo-400 mr-1 cursor-pointer"
                />
                Male
              </label>
              <label className={`${labelClass} cursor-pointer`}>
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                  className="accent-indigo-400 mr-1 cursor-pointer"
                />
                Female
              </label>
            </div>
          </div>
          <InputWrapper>
            <Field as="select" name="province" className={inputClass}>
              {provinceOptions.map((item, index) => (
                <option
                  key={index}
                  value={item.value}
                  label={item.label}
                  className={`${labelClass} bg-gray-800`}
                >
                  {item.label}
                </option>
              ))}
            </Field>
          </InputWrapper>
          <div className="flex flex-col mb-5">
            <label className={`${labelClass} cursor-pointer`}>
              <Field
                type="checkbox"
                name="terms"
                className="accent-indigo-400 mr-2 cursor-pointer"
              />
              I accept terms and conditions
            </label>
            <ErrorMessage name="terms">{errorMessage}</ErrorMessage>
          </div>
          <button
            type="submit"
            className="bg-slate-500 rounded px-5 py-1 text-gray-200 hover:bg-slate-600"
          >
            Submit
          </button>
          <ToastContainer />
        </Form>
      </Formik>
    </div>
  );
};

export default FormHandler;
