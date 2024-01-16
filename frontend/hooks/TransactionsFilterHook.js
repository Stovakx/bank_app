import React,{useState} from 'react'

const TransactionsFilterHook = (initialData) => {
  const [data, setdata] = useState(initialData);

  const filterTransactions = (year, month, day, transactionType) =>{
    const filtered = initialData.filter(transaction =>{
        const transactionDate = new Date(transaction.date);
        const transactionYear = transactionDate.getFullYear();
        const transactionMonth = transactionDate.getMonth() + 1;
        const transactionDay = transactionDate.getDate();

        const isYearMatch = year ? transactionYear === year : true;
        const isMonthMatch = month ? transactionMonth === month : true;
        const isDayMatch = day ? transactionDay === day : true;
        const isTypeMatch = transactionType ? transaction.typeOfTransaction === transactionType : true;

        return isYearMatch && isMonthMatch && isDayMatch && isTypeMatch;
    });

    setdata(filtered);
  };

  return {data, filterTransactions};
};

export default TransactionsFilterHook