import React from 'react';
// import data from '../../data';
import PropTypes from 'prop-types';
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

Friendlist.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default Friendlist;
