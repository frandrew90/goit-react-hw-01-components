import React from 'react';
import Friendlist from './friendList/Friendlist';
import Profile from './profile/Profile';
import StatisticalData from './statisticalData/StatisticalData';

const App = () => {
  return (
    <>
      <Profile />,
      <StatisticalData />,
      <Friendlist />
    </>
  );
};

export default App;
