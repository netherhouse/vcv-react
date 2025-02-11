import React from 'react';
import styles from './SingTogether.module.scss';

const SingTogether: React.FC = () => {
    return (
        <div className={styles.singTogether}>
            <h1>Sing Together</h1>
            <p>Welcome to the Sing Together page! Here, we celebrate the joy of singing together.</p>
            {/* Additional content can be added here */}
        </div>
    );
};

export default SingTogether;