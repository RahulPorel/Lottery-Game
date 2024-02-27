import { useState } from "react";
import "../styles/lottery.css";
import { generateTicket, sum } from "../logic/helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({
  n = 3,
  winningSum = 14,
  TobeWin1 = 13,
  TobeWin2 = 11,
  TobeWin3 = 9,
  TobeWin4 = 16,
  TobeWin5 = 20,
  TobeWin6 = 18,
}) {
  let [ticket, setTicket] = useState(generateTicket(n));
  let isWin = sum(ticket) === winningSum;
  let isTobeWin1 = sum(ticket) === TobeWin1;
  let isTobeWin2 = sum(ticket) === TobeWin2;
  let isTobeWin3 = sum(ticket) === TobeWin3;
  let isTobeWin4 = sum(ticket) === TobeWin4;
  let isTobeWin5 = sum(ticket) === TobeWin5;
  let isTobeWin6 = sum(ticket) === TobeWin6;

  let buyTicket = () => {
    setTicket(generateTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <p>
        Game Rule: Your Winning Criteria is based on Lottery no which if we
        total all 3 no value we should get no :- 15
      </p>

      <p>
        {
          (isTobeWin4,
          isTobeWin5,
          isTobeWin6 &&
            "Hint: if you want more chance then click Buy new ticket button")
        }
      </p>
      <Ticket ticket={ticket} />

      <button onClick={buyTicket}>Buy New Ticket</button>
      <br />

      <h3>
        {isTobeWin1 &&
          "Keep Trying, You are too much close to win the lottery !"}
      </h3>
      <h3>{isTobeWin2 && "Keep Trying, You are close to winning number !"}</h3>
      <h3>
        {isTobeWin3 &&
          " Try your Luck, Bad Luck comes and goes so Don' worry !"}
      </h3>
      <h3> {isTobeWin4 && "Bad Luck , but give it a try !"}</h3>

      <h3>{isWin && "Congratulations, you won!"}</h3>
    </div>
  );
}
