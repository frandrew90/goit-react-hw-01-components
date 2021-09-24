import React from 'react';
// import data from '../../data';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr className={s.rows} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
