import React from "react";
import logo from "../assets/logo.svg";
export default function Navbar({ wins }) {
  return (
    <div className="flex justify-between border-4 border-gray-400 rounded-xl w-1/2  p-2 mx-auto max-sm:w-4/5">
      {/* <div className="rsp max-sm:text-2xl">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div> */}
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="p-5 flex flex-col items-center bg-white text-[#192847] uppercase rounded-xl w-1/4 max-sm:w-1/3">
        <h1>Score</h1>
        <p className="font-bold text-4xl text-[#1c3352]">{wins}</p>
      </div>
    </div>
  );
}
