import React, { useState } from 'react';
import styles from './productDetail.module.css'; // Importa el módulo CSS

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const ProductDetails: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <p
    className={styles.texto}>
     Hola </p>
  );
};

export default ProductDetails;
