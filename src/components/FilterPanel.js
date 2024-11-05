import React from 'react';

const FilterPanel = ({ setGroupBy, setSortBy }) => (
  <div className="filter-panel">
    <label>
      Group By:
      <select onChange={e => setGroupBy(e.target.value)} defaultValue="status">
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </label>
    <label>
      Sort By:
      <select onChange={e => setSortBy(e.target.value)} defaultValue="priority">
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </label>
  </div>
);

export default FilterPanel;
