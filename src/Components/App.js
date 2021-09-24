import React from 'react';
import data from '../data';
import Friendlist from './friendList/Friendlist';
import Profile from './profile/Profile';
import StatisticalData from './statisticalData/StatisticalData';
import TransactionHistory from './transactions/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      ,
      <StatisticalData statData={data.statisticalData} title="Upload stats" />,
      <Friendlist friends={data.friends} />,
      <TransactionHistory transactions={data.transactions} />
    </>
  );
};

export default App;
