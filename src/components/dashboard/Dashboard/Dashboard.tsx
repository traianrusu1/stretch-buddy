import React from 'react';
import styles from './Dashboard.module.scss';
import Controls from '../Controls/index';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Controls />
    </div>
  );
};

export default Dashboard;
