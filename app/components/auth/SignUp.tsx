"use client";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { styles } from "../../styles/style";

type Props = {
  // setOpen: (open: boolean) => void;
  setRoute: (route: string) => void;
};

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  const [register, { isLoading, data, error, isSuccess }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration Successful";
      toast.success(message);
      setRoute("Verify");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async ({ name, email, password }) => {
      console.log(name, email, password);
      const data = {
        name,
        email,
        password,
      };

      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div className="w-full">
        <h1 className={`${styles.title}`}>Join with OnLearn</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-full mt-5 relative mb-1">
            <label
              htmlFor="name"
              className={`${styles.label}`}
            >
              Enter your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className={`${errors.name && touched.name && "border-red-500"} ${
                styles.input
              }`}
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && touched.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </div>

          <div className="w-full mt-5 relative mb-1">
            <label
              htmlFor="email"
              className={`${styles.label}`}
            >
              Enter your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="loginmail@gmail.com"
              className={`${
                errors.email && touched.email && "border-red-500"
              } ${styles.input}`}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <div className="">
            <label
              htmlFor="email"
              className={`${styles.label}`}
            >
              Enter your Password
            </label>
            <div className="w-full mt-5 relative mb-1">
              <input
                type={!show ? "password" : "text"}
                name="password"
                id="password"
                placeholder="password!@%"
                className={`${
                  errors.password && touched.password && "border-red-500"
                } ${styles.input}`}
                onChange={handleChange}
                value={values.password}
              />
              {!show ? (
                <AiOutlineEye
                  size={20}
                  className="absolute right-2 bottom-3 z-1 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  size={20}
                  className="absolute right-2 bottom-3 z-1 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
            {errors.password && touched.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>

          <div className="w-full mt-5">
            <button
              type="submit"
              disabled={isLoading}
              className={`${styles.button} `}
            >
              {isLoading ? (
                <CircularProgress
                  size={20}
                  color="inherit"
                  className="text-white"
                />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <br />
          <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
            Or join with
          </h5>
          <div className="flex items-center justify-center my-3">
            <FcGoogle
              size={30}
              className="cursor-pointer mr-3"
            />
            <AiFillGithub
              size={30}
              className="cursor-pointer ml-3"
            />
          </div>
          <h5 className="text-center pt-4 font-Poppins text-[14px]">
            Already have an account?{" "}
            <span
              className="text-[#2190ff] pl-1 cursor-pointer"
              onClick={() => setRoute("Login")}
            >
              Login
            </span>
          </h5>
        </form>
        <br />
      </div>
    </>
  );
};

export default SignUp;
