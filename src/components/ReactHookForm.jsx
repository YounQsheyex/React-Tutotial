import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//import useform
//register
// yup, zod

// Validation Schema
const validationschema = yup.object().shape({
  firstName: yup.string().required("First Name Is Required"),
  lastName: yup.string().required("Last Name Is Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("email is required"),
  password: yup
    .string()
    .min(3, "must be at least 3 characters long")
    .required("Password is required"),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationschema) });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormsubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);

      reset();
    }, 5000);
  };
  // after doing what we want to do we  reset();

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit(handleFormsubmit)} className="myform ">
        <h1>Submit your Details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border border-red-500" : ""
          }`}
          placeholder="First Name"
          {...register("firstName")}
        />
        <p className="text-red-400">
          {errors.firstName && errors.firstName.message}
        </p>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.lastName ? "border border-red-500" : ""
          }`}
          placeholder="Last Name"
          {...register("lastName")}
        />
        <p className="text-red-400">
          {errors.lastName && errors.lastName.message}
        </p>
        <input
          type="email"
          className={`input mt-2 w-full ${
            errors.email ? "border border-red-500" : ""
          }`}
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-red-400">{errors.email && errors.email.message}</p>
        <input
          type="password"
          className={`input mt-2 w-full ${
            errors.password ? "border border-red-500" : ""
          }`}
          {...register("password")}
        />
        <p className="text-red-500">
          {errors.password && errors.password.message}
        </p>
        <button className="btn btn-accent w-full mt-2.5">
          {isSubmitting ? "Submiting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
