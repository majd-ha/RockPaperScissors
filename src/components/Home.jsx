import React, { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import RulesIcon from "../icons/RulesIcon";
import GameStart from "./GameStart";
import Navbar from "./Navbar";
export default function Home() {
  const [openPopup, setOpenPopup] = useState(false);
  console.log(openPopup);
  const [wins, setWins] = useState(0);
  return (
    <div className=" py-2 flex flex-col items-center gap-4 max-sm:gap-8">
      <Navbar wins={wins} />
      <div className="flex justify-center mt-5 w-1/2 max-sm:w-full max-sm:px-2">
        <GameStart setWins={setWins} />
      </div>
      <div className="flex justify-end px-5 w-full max-sm:justify-center max-sm:mt-5">
        <button
          className="w-24 px-6 py-2 border-2 border-white text-blue rounded-xl "
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          Rules
        </button>
      </div>

      <div
        className={`absolute  w-screen h-screen top-0 right-0 justify-center items-center bg-[rgba(0,0,0,0.3)] ${
          openPopup ? "flex" : "hidden"
        }`}
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            setOpenPopup(false);
          }
        }}
      >
        <div className="bg-white flex flex-col gap-5 p-5 rounded-xl">
          <div className="flex justify-between">
            <h1 className="text-blue-950 font-bold text-2xl">Rules</h1>
            <button
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <RulesIcon />
        </div>
      </div>
    </div>
  );
}
