import React from "react";
import SignupPhoto from "../assets/Signup.png";
import { useEffect, useRef, useState } from "react";
import Alert from "./Alert.jsx";
import Axiosapi from "../Api/Axiosapi";

function Signup() {
  const [alert, setalert] = useState({
    mode: false,
    message: "",
    type: "bg-[red]",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(0);
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axiosapi.post(
        "/users/signup",
        JSON.stringify({ name, email, role, password, cpassword }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response.data.status));
      console.log(JSON.stringify(response.data.message));

      setName("");
      setEmail("");
      setRole(0);
      setPassword("");
      setCPassword("");
      setalert({
        mode: true,
        message: "User registered successfully",
        type: "bg-[green]",
      });
    }
     // Handle all Request that not Setisfy
    catch (err) {
      if (!err?.response) {
        setalert({
          mode: true,
          message: "No Server Response",
          type: "bg-[red]",
        });
      } else if (err.response?.status === 409) {
        setalert({
          mode: true,
          message: "User Name Taken",
          type: "bg-[red]",
        });
      } else if (err.response?.status === 410) {
        setalert({
          mode: true,
          message: "Password and Confirm Password Not Matched",
          type: "bg-[red]",
        });
      } else {
        setalert({
          mode: true,
          message: "Registration failed",
          type: "bg-[red]",
        });
      }
    }
    // }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto mt-5 mb-6 flex flex-wrap items-center justify-between">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0  flex-[5] pr-4">
          <img
            src={SignupPhoto}
            aria-hidden
            className="min-h-fit"
            alt="Photo coming please wait"
          />
        </div>
        <div className="lg:w-2/6 md:w-1/2 px-12 pt-12 pb-20 ml-8 bg-gray-100 rounded-lg  flex flex-[5] flex-col md:ml-auto w-full  md:mt-0">
          {alert.mode ? <Alert alert={alert} setalert={setalert} /> : ""}

          <h2 className="text-gray-900 text-3xl mb-7 text-center font-medium title-font ">
            Add user
          </h2>

          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Role
            </label>
            <select
              id="countries_disabled"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value={0} defaultChecked>
                User
              </option>
              <option value={1}> Admin </option>
            </select>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="text"
              id="password"
              name="cpassword"
              onChange={(e) => setCPassword(e.target.value)}
              value={cpassword}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <center>
            <button
              className="text-black mt-10 font-bold text-center bg-gradient-to-r from-[#00C7F2] from-8.9%   to-[#C200F2] to-85.89% border-0 py-2 px-8 focus:outline-none hover:bg-indigo-900 rounded text-lg"
              onClick={(e) => handleSubmit(e)}
            >
              Create Account
            </button>
          </center>
        </div>
      </div>
    </section>
  );
}

export default Signup;
