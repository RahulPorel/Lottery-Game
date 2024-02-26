import TicketNum from "./ticketNum";
import "../styles/Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <>
      <div className="Ticket">
        <p className="ticketNo">Ticket Number: </p>

        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </div>
    </>
  );
}
