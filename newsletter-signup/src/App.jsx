import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Lists from "./Lists";
import Email from "./Email";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalOn, setIsModalOn] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setError("This field cannot be empty");
    } else if (!validateEmail(email)) {
      setError("valid email required");
    } else {
      setError("");
      setIsModalOn(true);
    }
  }
  function handleFocus() {
    if (!email) {
      setError("This field cannot be empty");
    } else if (!validateEmail(email)) {
      setError("valid email required");
    } else {
      setError("");
    }
  }
  function hideAlert() {
    setIsModalOn(false);
  }

  return (
    <>
      <div
        className={`modal-popup ${
          isModalOn ? "show" : ""
        } p-[30px] flex justify-between w-[100%] flex-col fixed z-50 alert-box h-[100%] bg-White`}
      >
        <div className="relative top-[100px] flex flex-col gap-5">
          <img
            className="w-[50px]"
            src="/images/icon-success.svg"
            alt="checkmark"
          />
          <p className="font-bold text-Dark-slateGray text-[40px] leading-[45px]">
            Thanks for subscribing!
          </p>
          <p className="text-Charcoal-Grey">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span> Please open it and click
            the button inside to confirm your subscription
          </p>
        </div>

        <button
          onClick={hideAlert}
          className="font-semibold relative mt-[10px] cursor-pointer bg-Dark-slateGray text-White p-[15px] rounded-[10px]"
        >
          Dismiss message
        </button>
      </div>
      <div className="top-container w-full lg:hidden"></div>

      <div className="lg:absolute inset-0 flex items-center justify-center">
        <div className="p-[30px] flex flex-col gap-5 lg:bg-White lg:flex-row lg:rounded-[20px]  lg:w-[65%] lg:h-[90vh] lg:justify-between  lg:gap-10 lg:items-center">
          <div className="content-items lg:ml-5 lg:mb-8 relative lg:h-[70%] lg:w-[600px]">
            <div className="flex flex-col gap-5">
              <h1 className="lg:text-[40px] text-[24px] font-bold text-Dark-slateGray">
                Stay Updated!
              </h1>
              <p className="text-[16px] text-Charcoal-Grey font-normal">
                Join 6000+ product managers receiving monthly updates on:
              </p>

              <Lists list={"Product discovery and  building what matters"} />
              <Lists list={"Measuring to ensure updates are a success"} />
              <Lists list={"And much more!"} />

              <Email
                handleEmail={handleEmail}
                emailError={error}
                email={email}
                handleSubmit={handleSubmit}
                handleFocus={handleFocus}
              />
            </div>
          </div>

          <div className="hidden lg:block rounded-[20px] desktop-img size-[600px] h-[550px] bg-pattern-desktop bg-no-repeat">
            {/* <img
              className="hidden lg:inline"
              src="/images/illustration-sign-up-desktop.svg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
