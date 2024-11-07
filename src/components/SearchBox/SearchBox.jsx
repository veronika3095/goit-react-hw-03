/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      className={styles.searchInput}
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;