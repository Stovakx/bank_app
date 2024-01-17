import React from "react";
import Header from "../section/Header";
import FilteredTransactions from "../components/filteredTransactions";
import { StyledSafeAreaView, StyledText } from "../styles/index";
import TransactionsFilterHook from "../hooks/TransactionsFilterHook";
import { transactionData } from "../utils/data";
import FilterBar from "../components/filterBar";

export default function AllTransactionsScreen() {
  const { filters, updateFilter } = TransactionsFilterHook();
  const { data: filteredData } = FilteredTransactions(transactionData, filters);

  return (
    <StyledSafeAreaView>
      <Header />
      <FilterBar onSelectFilter={updateFilter} filters={filters} />
      <FilteredTransactions data={filteredData} />
    </StyledSafeAreaView>
  );
}
