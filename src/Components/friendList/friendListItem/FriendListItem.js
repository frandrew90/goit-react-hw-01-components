import React from 'react';

const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
