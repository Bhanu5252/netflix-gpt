import Header from "./Header";
import { useState,useRef } from "react";
 import CheckValidData from "../utils/validate";
 import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);   
    const toggleSignIn = () => {
        setIsSignedIn(!isSignedIn);
    }
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const navigate = useNavigate();
 const handleButtonClick = async () => {
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const name = nameRef?.current?.value;

  const message = CheckValidData(email, password);

  if (!message.valid) {
    setErrorMessage(message.message);
    return;
  }

  try {
    if (!isSignedIn) {
      // 🔥 SIGN UP
      const response = await fetch("http://localhost:3001/api/v1/user/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message);
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        navigate("/browse");
      }

    } else {
      // 🔥 SIGN IN
      const response = await fetch("http://localhost:3001/api/v1/user/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message);
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        navigate("/browse");
      }
    }

  } catch (error) {
    console.error("Error:", error);
    setErrorMessage("Something went wrong");
  }
};



  return (
    <div className="relative h-screen w-full">

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
        alt="background"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Header (NOW OVER IMAGE) */}
      <div className="absolute top-0 left-0 w-full z-20 p-4">
        <Header />
      </div>

      {/* Login Form */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <form onSubmit = {(e) => e.preventDefault()} className="bg-black bg-opacity-80 p-10 rounded-md w-96">
          <h1 className="text-white text-3xl font-bold mb-6">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </h1>

 {isSignedIn || (
            <input
                ref={nameRef}
              type="fullname"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none"
            />
          )}

          <input
            ref={emailRef}
            type="email"
            placeholder="Email address"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none"
          />

          <input
            ref={passwordRef}

            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-700 text-white rounded focus:outline-none"
          />

          <p className="text-red-500">{errorMessage}</p>

          <button className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700" onClick={handleButtonClick}>
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400 mt-4 text-sm">
  New to Netflix?{" "}
  <span className="text-white underline cursor-pointer hover:text-red-500" onClick={toggleSignIn}>
    {isSignedIn ? "Sign Up Now" : "Sign In Now"}
  </span>
</p>

        </form>
        
      </div>

    </div>
  );
};

export default Login;