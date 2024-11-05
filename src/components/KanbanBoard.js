import React from 'react';
import GroupColumn from './GroupColumn';

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy, sortBy);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <GroupColumn key={group} title={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

const groupTickets = (tickets, groupBy, sortBy) => {
  const grouped = tickets.reduce((acc, ticket) => {
    const groupKey = ticket[groupBy];
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  // Sort each group
  Object.keys(grouped).forEach(key => {
    grouped[key].sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  });

  return grouped;
};

export default KanbanBoard;
