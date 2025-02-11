import React from 'react';
import styles from './Repertoire.module.scss';

const Repertoire: React.FC = () => {
    return (
        <div className={styles.repertoire}>
            <h1>Repertoire</h1>
            <p>Welcome to the Repertoire page. Here you can find information about our musical repertoire.</p>
        </div>
    );
};

export default Repertoire;