import React, { FC } from 'react';
import styles from './friend-card.module.css';

interface FriendCardProps {
  name: string;
  status?: string;
  email: string;
  phoneNumber: string;
}

const FriendCard: FC<FriendCardProps> = ({ name, status, email, phoneNumber }) => {
  const getStatusClassName = () => {
    if (status === "Close Friends") {
      return styles.cardCloseFriends;
    } else if (status === "Super Close Friends") {
      return styles.cardSuperCloseFriends;
    } else {
      return '';
    }
  };

  return (
    <div className={styles.cardDiv}>
      <div className={styles.cardUpperDiv}>
        <div className={styles.cardName}>{name}</div>
        {status && (
          <div className={`${styles.cardStatus} ${getStatusClassName()}`}>{status}</div>
        )}
      </div>
      <div className={styles.cardLowerDiv}>
        <div className={styles.cardEmail}>{email}</div>
        <span>&#x2022;</span>
        <div className={styles.cardNumber}>{phoneNumber}</div>
      </div>
    </div>
  );
};

export default FriendCard;