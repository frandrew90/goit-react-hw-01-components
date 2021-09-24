import React from 'react';
// import data from '../../data';
import PropTypes from 'prop-types';

const StatisticalData = ({ statData, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title"> {title}</h2>}

      <ul className="stat-list">
        {statData.map(stat => {
          const { id, label, percentage } = stat;
          return (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

StatisticalData.propTypes = {
  statData: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default StatisticalData;
