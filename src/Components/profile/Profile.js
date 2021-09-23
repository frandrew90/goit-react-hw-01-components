import React from 'react';
import data from '../../data';

const Profile = () => {
  return (
    <div className="profile">
      <div className="description">
        <img src={data.user.avatar} alt={data.user.name} className="avatar" />
        <p className="name">{data.user.name}</p>
        <p className="tag">@{data.user.tag}</p>
        <p className="location">{data.user.location}</p>
      </div>

      <ul className="stats">
        {Object.entries(data.user.stats).map(stat => {
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
