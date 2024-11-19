import React, { useState } from "react";

function Email({ handleEmail, email }) {
  const [emailError, setEmailError] = useState("");

  function validateEmail(e) {
    const value = e.target.value;
    handleEmail(e);
    if (!value) {
      setEmailError("This field cannot be empty");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("valid email required");
    } else {
      setEmailError("");
    }
  }
  return (
    <form action="">
      <div className="flex flex-col relative mt-[30px] gap-1">
        <div className="flex justify-between">
          <label
            className="text-[13px] font-semibold text-Dark-slateGray"
            htmlFor=""
          >
            Email address
          </label>
          <span className="error-message text-[13px] text-primary-tomato">
            {emailError}
          </span>
        </div>

        <input
          className={`error-message ${
            emailError ? "border-primary-tomato" : "border-Grey"
          } p-[10px] pl-[20px] rounded-[10px] border-solid border-Grey border-[1px] outline-none`}
          type="email"
          placeholder="email@company.com"
          onChange={validateEmail}
          value={email}
        />
        <input
          className="font-semibold relative mt-[10px] cursor-pointer bg-Dark-slateGray text-White p-[15px] rounded-[10px]"
          type="submit"
          value={"Subscribe to monthly newsletter"}
        />
      </div>
    </form>
  );
}

export default Email;
