import React from "react";
import TraiIcon from "../icons/TraiIcon";

export default function Stage1({ setNextstage, choses }) {
  return (
    <div className="p-5 relative flex justify-center items-center w-2/3 mx-auto max-sm:w-11/12">
      <TraiIcon />
      {choses.map((el) => {
        return (
          <div
            onClick={() => setNextstage({ stnum: 2, data: el.id })}
            key={el.id}
            className={`absolute cursor-pointer rounded-full w-36 h-36 flex justify-center items-center bg-white border-16 ${el.class}`}
          >
            {el.icon}
          </div>
        );
      })}
    </div>
  );
}
