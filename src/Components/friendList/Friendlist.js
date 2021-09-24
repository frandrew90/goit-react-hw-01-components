import React from 'react';
// import data from '../../data';
import FriendListItem from './friendListItem/FriendListItem';

const Friendlist = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

export default Friendlist;
