import React from 'react';
// import 'modern-normalize';
import data from '../data';
import FriendList from './friendList/FriendList';
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

      <StatisticalData statData={data.statisticalData} title="Upload stats" />
      <FriendList friends={data.friends} />
      <TransactionHistory transactions={data.transactions} />
    </>
  );
};

export default App;
