import React from 'react';
import styles from './style.module.scss';

export type PropertyListType = {
  title: string; 
  isSuperHost?: boolean;
  description?: string;
  ratingNumber?: number
};

type PropertyListProps = {
  titleSection: String;
}

const PropertyList = ({titleSection}: PropertyListProps) => {
  return (
    <section className={styles.titleSection}>
      <h2 className={styles.title}>{titleSection}</h2>
      <div className={styles.numberItems}>
        <span>stays</span>
      </div>
    </section>
  );
}

export default PropertyList;