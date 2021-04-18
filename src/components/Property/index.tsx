import React from 'react';
import styles from './style.module.scss';

export type PropertyType = {
  title: string; 
  isSuperHost?: boolean;
  description?: string;
  ratingNumber?: number
};

const labelSuperHost: string = 'Super Host';

const Property = ({ title, isSuperHost, description, ratingNumber}: PropertyType) => {
  return (
    <article className={styles.property}> 
      <img 
        className={styles.coverImage} 
        src="../../../public/property.png" 
        alt="" 
        />
      <div className={styles.details}>
        {isSuperHost && <div className={styles.labelSuperHost}>{labelSuperHost}</div>}
        <div className={styles.description}>{description}</div>
        <div className={styles.rating}>
          <img className={styles.ratingIcon} alt="" />
          <span className={styles.ratingNumber}>{ratingNumber}</span>
        </div>
      </div>
      <h3 className={styles.title}>
        {title}
      </h3>
    </article>
  );
}

export default Property;