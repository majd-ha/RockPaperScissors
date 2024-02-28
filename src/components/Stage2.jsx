import { useEffect, useState } from "react";

export default function Stage2({
  setNextstage,
  nextstagedata,
  choses,
  setWins,
}) {
  const [computerChose, setOpponent] = useState(null);
  const [winner, setWinner] = useState(null);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const pickauto = () => {
      setOpponent(choses[Math.round(Math.random() * 2)].id);
    };
    const timout = setTimeout(() => {
      pickauto();
    }, 1000);
    return () => {
      clearTimeout(timout);
      setOpponent(null);
    };
  }, [nextstagedata]);

  useEffect(() => {
    if (nextstagedata != null && computerChose != null) {
      if (nextstagedata == computerChose) {
        setWinner(3);
      } else if (Math.abs(nextstagedata - computerChose) == 1) {
        setWinner(Math.min(nextstagedata, computerChose));
      } else if (Math.abs(nextstagedata - computerChose) == 2) {
        setWinner(Math.max(nextstagedata, computerChose));
      }
    }
  }, [computerChose, nextstagedata]);
  useEffect(() => {
    if (winner != null) {
      if (winner == nextstagedata) {
        setResult("you Win");
        setWins((prev) => prev + 1);
      } else if (winner == computerChose) {
        setResult("You Lose");
      } else if (winner == 3) {
        setResult("You Tied");
      }
    }
  }, [winner]);

  return (
    <div className="flex justify-between w-4/5 mx-auto max-sm:w-11/12">
      <div className="flex flex-col items-center gap-5">
        <div
          className={`${choses[nextstagedata].class} ${
            winner == nextstagedata && " winneranim"
          } translate-x-0 cursor-pointer rounded-full w-44 h-44 max-sm:w-36 max-sm:h-36 flex justify-center items-center bg-white border-16 `}
        >
          {choses[nextstagedata].icon}
        </div>
        <h1 className="text-center">You Picked</h1>
      </div>
      <div className="flex flex-col items-center gap-5">
        {computerChose !== null ? (
          <div
            className={`${choses[computerChose].class} translate-x-0 ${
              winner == computerChose && "winneranim"
            } cursor-pointer rounded-full w-44 h-44 max-sm:w-36 max-sm:h-36 flex justify-center items-center bg-white border-16 `}
          >
            {choses[computerChose].icon}
          </div>
        ) : (
          <div className="w-36 h-36 bg-[#172240] rounded-full m-8 max-sm:m-0"></div>
        )}
        <h1 className="text-center">computer Picked</h1>
      </div>
      {result && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
          <div className="flex flex-col items-center gap-5">
            <h1
              className={`font-bold text-3xl str uppercase ${
                winner == nextstagedata ? "text-green-500" : "text-red-500"
              } text-2xl`}
            >
              {" "}
              {result}
            </h1>
            <button
              onClick={() => {
                setOpponent(null);

                setNextstage({ stnum: 1, data: null });
              }}
              className={`px-10 py-3 w-fit rounded-xl bg-white ${
                winner == nextstagedata ? "text-green-500" : "text-red-500"
              } text-2xl`}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
