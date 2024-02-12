import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constant";

const Login = () => {
  const [isLogin, setISLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const handleLogin = () => {
    setISLogin(!isLogin);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormValidate = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLogin) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img className="h-screen w-screen object-cover" src={BG_IMG} alt="bg_img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-4/12 p-8 bg-black m-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="py-4 font-bold text-3xl">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full rounded-sm bg-slate-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-4 w-full rounded-sm bg-slate-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full rounded-sm bg-slate-700"
        />
        <p className="font-mono text-red-700">{errorMessage}</p>
        <button
          onClick={handleFormValidate}
          type="submit"
          className="p-2 my-6 bg-red-700 w-full rounded-lg"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p className="py-4 text-slate-400 ">
          New to Netflix?{"  "}
          <span
            className="cursor-pointer text-white font-semibold"
            onClick={handleLogin}
          >
            {isLogin ? "Sign Up Now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
