import React from 'react';
// import data from '../../data';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.entries(stats).map(stat => {
          return (
            <li key={stat[0]}>
              <span className="label">{stat[0]}</span>
              <span className="quantity">{stat[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
