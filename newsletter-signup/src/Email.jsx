import React from "react";

function Email() {
  return (
    <div className="flex flex-col relative mt-[30px] gap-1">
      <label
        className="text-[13px] font-semibold text-Dark-slateGray"
        htmlFor=""
      >
        Email address
      </label>
      <input
        className="p-[10px] pl-[20px] rounded-[10px] border-solid border-Grey border-[1px] outline-none"
        type="email"
        placeholder="email@company.com"
      />
      <input
        className="font-semibold relative mt-[10px] cursor-pointer bg-Dark-slateGray text-White p-[15px] rounded-[10px]"
        type="submit"
        value={"Subscribe to monthly newsletter"}
      />
    </div>
  );
}

export default Email;
