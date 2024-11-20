import React from "react";

function Lists({ list }) {
  return (
    <div className="flex gap-5 lg:gap-3">
      <img className="lg:w-[15px]" src="/images/icon-list.svg" alt="" />
      <p className="text-left text-Charcoal-Grey font-normal">{list}</p>
    </div>
  );
}

export default Lists;
