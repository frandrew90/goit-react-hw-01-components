import React from 'react';
// import data from '../../data';

const StatisticalData = ({ statData, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title"> {title}</h2>}

      <ul className="stat-list">
        {statData.map(stat => {
          return (
            <li className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StatisticalData;
