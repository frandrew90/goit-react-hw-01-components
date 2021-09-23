import React from 'react';
import data from '../../data';
import FriendListItem from './friendListItem/FriendListItem';

const Friendlist = () => {
  return (
    <ul className="friend-list">
      {data.friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

export default Friendlist;
