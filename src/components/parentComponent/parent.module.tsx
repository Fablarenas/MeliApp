import React, { useState } from 'react';

import SearchBox from '../searchBox/SearchBox.module';
import ProductList from '../productResults.module/productResults.module';
import fetchSearchResults from '../../services/searchProductService';
import { SearchResultDto } from '../../models/SearchResultDto';

const ParentComponent: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResultDto | null>(null);
  
  const handleSearch = async (query: string) => {
    try {
      const results = await fetchSearchResults(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      {searchResults && <ProductList  products={searchResults.items}  />}
    </>
  );
};

export default ParentComponent;