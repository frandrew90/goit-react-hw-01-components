import React from 'react';
import Friendlist from './friendList/Friendlist';
import Profile from './profile/Profile';
import StatisticalData from './statisticalData/StatisticalData';
import TransactionHistory from './transactions/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile />,
      <StatisticalData />,
      <Friendlist />,
      <TransactionHistory />
    </>
  );
};

export default App;
