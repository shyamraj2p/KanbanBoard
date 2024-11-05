import React from 'react';
import TicketCard from './TicketCard';

const GroupColumn = ({ title, tickets }) => (
  <div className="group-column">
    <h2>{title}</h2>
    <div className="tickets-list">
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  </div>
);

export default GroupColumn;
