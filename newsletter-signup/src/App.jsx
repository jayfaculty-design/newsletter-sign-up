import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Lists from "./Lists";
import Email from "./Email";

function App() {
  const [email, setEmail] = useState("");

  function handleEmail(event) {
    const value = event.target.vlaue;
    setEmail(value);
  }

  return (
    <>
      <div className="top-container w-full bg-"></div>
      <div className="p-[30px] flex flex-col gap-5">
        <h1 className="text-[24px] font-bold text-Dark-slateGray">
          Stay Updated!
        </h1>
        <p className="text-[16px] text-Charcoal-Grey font-normal">
          Join 6000+ product managers receiving monthly updates on:
        </p>
        <Lists list={"Product discovery and  building what matters"} />
        <Lists list={"Measuring to ensure updates are a success"} />
        <Lists list={"And much more!"} />
        <Email handleEmail={handleEmail} email={email} />
      </div>
    </>
  );
}

export default App;
