import React from 'react';
// import data from '../../data';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
