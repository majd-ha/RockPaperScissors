import React, { useState } from "react";
import PaperIcon from "../icons/PaperIcon";
import RockIcon from "../icons/RockIcon";
import ScissorsIcon from "../icons/ScissorsIcon";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
export default function GameStart({ setWins }) {
  const [nextstage, setNextstage] = useState({ stnum: 1, data: null });
  const choses = [
    {
      id: 0,
      class: "-top-3 right-0 shicon-yelllow  border-[#eaa011]",
      icon: <ScissorsIcon />,
    },
    {
      id: 1,
      class: "-top-3 left-0 shicon-blue  border-[#4c65f4]",
      icon: <PaperIcon />,
    },
    {
      id: 2,
      class:
        "bottom-0 left-1/2 -translate-x-1/2  shicon-pink  border-[#db3353]",
      icon: <RockIcon />,
    },
  ];
  console.log(nextstage);
  return (
    <div className="w-full">
      {nextstage.stnum == 1 ? (
        <Stage1 setNextstage={setNextstage} choses={choses} />
      ) : nextstage.stnum == 2 ? (
        <Stage2
          setNextstage={setNextstage}
          nextstagedata={nextstage.data}
          choses={choses}
          setWins={setWins}
        />
      ) : (
        ""
      )}
    </div>
  );
}
