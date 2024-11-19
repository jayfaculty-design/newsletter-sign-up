import React, { useState } from "react";

function Email({ handleEmail, email, emailError, handleSubmit, handleFocus }) {
  return (
    <form onSubmit={handleSubmit} action="">
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
            emailError
              ? "border-primary-tomato text-primary-tomato"
              : "border-Grey"
          } p-[10px] pl-[20px] rounded-[10px] border-solid border-Grey border-[1px] outline-none`}
          type="email"
          placeholder="email@company.com"
          onChange={handleEmail}
          value={email}
          onBlur={handleFocus}
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
