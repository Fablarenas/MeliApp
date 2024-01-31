import React, { useState } from 'react';
import styles from './SearchBox.module.scss';
import logo from '../../assets/images/Logo_ML.png';
import iconoSearch from '../../assets/images/ic_Search.png';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with query:', query);
    onSearch(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo Meli" />
        </div>
        <form onSubmit={handleSubmit} className={styles.searchbar}>
          <input
            type="search"
            placeholder="Nunca dejes de buscar"
            value={query}
            onChange={handleChange}
          />
          <button type="submit">
            <img src={iconoSearch} alt="Buscar" />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default SearchBox;
