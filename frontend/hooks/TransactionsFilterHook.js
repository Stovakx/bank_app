import React, { useState } from "react";

const TransactionsFilterHook = () => {
  const [filters, setFilters] = useState({
    year: null,
    month: null,
    day: null,
    type: null,
  });

  const updateFilter = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  return {
    filters,
    updateFilter,
  };
};

export default TransactionsFilterHook;
