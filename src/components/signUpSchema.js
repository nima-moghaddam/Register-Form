// Validation
import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "name must be more than 3 character")
    .required("Please enter your name")
    .matches(
      /^[A-za-zآابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+/,
      "please enter valid name"
    ),
  nationalCode: Yup.string()
    .required("Please enter your national code")
    .test(
      "nationalCodeValid",
      "national code format is incorrect",
      function (value) {
        if (!/^\d{10}$/.test(value)) return false;
        const check = +value[9];
        const sum =
          value
            .split("")
            .slice(0, 9)
            .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
        return sum < 2 ? check === sum : check + sum === 11;
      }
    ),
  email: Yup.string()
    .required("Please enter your email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please enter valid email"
    ),
  phone: Yup.string()
    .min(11, "Please enter your phone number")
    .required("phone is required")
    .matches(/^[09].[0-9]{9}$/, "phone number is invalid"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  terms: Yup.boolean().oneOf([true], "Please accept our terms"),
});
