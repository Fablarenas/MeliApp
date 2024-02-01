import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumb.module.scss';

interface BreadcrumbProps {
  categories: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  if (!categories) return null;

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {categories.map((category, index) => {
          const isLast = index === categories.length - 1;
          return (
            <li key={index}>
              {isLast ? (
                <span>{category}</span>
              ) : (
                <Link to={`/category/${category}`}>{category}</Link>
              )}
              {!isLast && <span className={styles.separator}> &gt; </span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
