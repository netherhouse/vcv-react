import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1>About Us</h1>
            <p>
                Welcome to our application! We are dedicated to providing the best experience for our users.
                Our team is passionate about our mission and we strive to make a positive impact in the community.
            </p>
            <p>
                Here you can find more information about our goals, values, and the services we offer.
            </p>
        </div>
    );
};

export default About;