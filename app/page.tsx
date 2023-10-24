import React from 'react';
import styles from './page.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.content}>
                Welcome to the Clerkie Challenge!
            </div>
        </div>
    );
}

export default Home;