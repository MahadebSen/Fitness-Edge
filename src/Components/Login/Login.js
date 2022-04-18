import React, { useRef } from "react";
import google from "../../images/Google.png";
import github from "../../images/Github.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  let errorMsg;
  if (error || googleError || githubError || resetError) {
    errorMsg = (
      <div>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleGithubSignIn = () => {
    signInWithGithub();
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      toast("Password reset email sent");
    }
  };

  if (user || googleUser || githubUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="h-[750px] flex justify-center items-center">
      <div className="px-8 rounded-lg border-2 border-cyan-400 mb-16">
        <p className="text-center mb-9 mt-5 text-3xl font-semibold">Login</p>
        <form onSubmit={handleLogin}>
          <div className="my-3">
            <p className="text-lg my-2">Email</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-lg px-2"
              type="text"
              ref={emailRef}
              required
            />
          </div>
          <div className="my-3">
            <p className="text-lg my-2">Password</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-xl px-2"
              type="password"
              ref={passwordRef}
              required
            />
          </div>
          <div>{errorMsg}</div>
          <div className="flex justify-center mt-6 mb-4">
            <button className="border-2 px-4 py-2 border-red-400 rounded-xl text-lg font-medium hover:bg-red-600 hover:text-white">
              Login
            </button>
          </div>
        </form>
        <div className="mb-7">
          <div className="flex">
            <p>New to here.</p>
            <Link to="/createaccount">
              <p className="ml-1 text-indigo-600">Create Account</p>
            </Link>
          </div>
          <div className="flex">
            <p>Don't remember password?</p>
            <p onClick={handlePasswordReset} className="ml-1 text-indigo-600">
              Forget Password
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-medium">Or, login using</p>
        </div>
        <div className="flex justify-center mb-5">
          <img
            onClick={handleGoogleSignIn}
            className="w-[65px] my-3 mx-2"
            src={google}
            alt=""
          />
          <img
            onClick={handleGithubSignIn}
            className="w-[65px] my-3 mx-2"
            src={github}
            alt=""
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
