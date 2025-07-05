import * as Yup from "yup";

// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

// const errorMessage = "use lowercase, uppercase and digits";

// const signupSchema = yup.object().shape({
//   fullNameEnglish: yup.string().max(30).required("Name is required"),
//   username: yup.string().min(5).max(30).required("Username is required"),
//   email: yup.string().email("Enter a valid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(8)
//     .max(25)
//     .matches(passwordPattern, { message: errorMessage })
//     .required("Password is required"),
// });


  // Validation Schema with Yup
  const signupSchema = Yup.object({
    fullNameEnglish: Yup.string()
    .min(1, "Full name in English must be at least 1 character")
    .max(50, "Full name in English must be at most 50 characters")
    .required("Full name in English is required"),

  fullNameArabic: Yup.string(),
  role: Yup.string().valid("user","artist","patron","Intermediary"),

  username: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Username must only contain alphanumeric characters")
    .min(1, "Username must be at least 1 character")
    .max(50, "Username must be at most 50 characters")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one digit, and be at least 8 characters long"
    ),

  mobileNumber: Yup.string().required("Mobile number is required"),

  profilePicture: Yup.string(),

  country: Yup.string().required("Country is required"),

  city: Yup.string().required("City is required"),

  interests: Yup.array()
    .of(Yup.string())
    .min(1, "At least one interest is required")
    .required("Interests are required"),

  });

export default signupSchema;
