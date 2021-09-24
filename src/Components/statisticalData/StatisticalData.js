import React from 'react';
// import data from '../../data';
import PropTypes from 'prop-types';
import s from './StatisticalData.module.css';

const StatisticalData = ({ statData, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}> {title}</h2>}

      <ul className={s.statList}>
        {statData.map(stat => {
          const { id, label, percentage } = stat;
          return (
            <li className={s.item} key={id}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
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
