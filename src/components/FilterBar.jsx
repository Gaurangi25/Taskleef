import React from "react";

const FilterBar = ({ currentFilter, setFilter }) => {
  return (
    <div className="filter-bar">
      <button
        className={`filter-btn ${currentFilter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`filter-btn ${currentFilter === "active" ? "active" : ""}`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`filter-btn ${currentFilter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterBar;
