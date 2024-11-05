import React from 'react';

const TicketCard = ({ ticket }) => (
  <div className="ticket-card">
    <h3>{ticket.title}</h3>
    <p>Priority: {ticket.priority}</p>
    <p>Status: {ticket.status}</p>
  </div>
);

export default TicketCard;
