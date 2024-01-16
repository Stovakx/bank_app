import React,{useState} from 'react'
import Header from '../section/Header'
import FilteredTransactions from '../components/filteredTransactions';
import {StyledSafeAreaView, StyledText} from '../styles/index';
import TransactionsFilterHook from '../hooks/TransactionsFilterHook';
import { transactionData } from '../utils/data';
import FilterBar from '../components/filterBar';

export default function AllTransactionsScreen() {
  const { data: filteredData, filterTransactions } = TransactionsFilterHook(transactionData);



  return (
    //filter na měsíc, den, rok, podle karty(update transactions o card)
    <StyledSafeAreaView>
      <Header/>
      <FilterBar/>
      <FilteredTransactions data={filteredData}/>
    </StyledSafeAreaView>
   
  )
}