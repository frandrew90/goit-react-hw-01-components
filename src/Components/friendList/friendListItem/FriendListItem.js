import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={s.item}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;
