import React, { useRef } from "react";
import { Link } from "react-router-dom";
import google from "../../images/Google.png";
import github from "../../images/Github.png";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAccount = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification();
      toast("Email Verification Sent");

      console.log(email, password, user);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleGithubSignIn = () => {
    signInWithGithub();
  };

  let errorMsg;
  if (error || updateError || googleError || githubError || verifyError) {
    errorMsg = (
      <div>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="h-[950px] flex justify-center items-center">
      <div className="px-10 rounded-lg border-2 border-cyan-400 mb-20">
        <p className="text-center mb-9 mt-5 text-3xl font-semibold">
          Create an Account
        </p>
        <form onSubmit={handleCreateAccount}>
          <div className="my-3">
            <p className="text-lg my-2">Name</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-lg px-2"
              type="text"
              ref={nameRef}
              required
            />
          </div>
          <div className="my-3">
            <p className="text-lg my-2">Email</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-lg px-2"
              type="email"
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
          <div className="my-3">
            <p className="text-lg my-2">Confirm Password</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-xl px-2"
              type="password"
              ref={confirmPasswordRef}
              required
            />
          </div>
          <div>
            <p>{errorMsg}</p>
          </div>
          <div className="flex justify-center mt-6 mb-4">
            <button className="border-2 px-4 py-2 border-red-400 rounded-xl text-lg font-medium hover:bg-red-600 hover:text-white">
              Create Account
            </button>
          </div>
        </form>
        <div className="mb-7">
          <div className="flex">
            <p>Alrady have an account ?</p>
            <Link to="/login">
              <p className="ml-1 text-indigo-600">Login</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-medium">Or, Create account using</p>
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

export default CreateAccount;
