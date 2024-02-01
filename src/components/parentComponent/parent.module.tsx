import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchBox from '../searchBox/SearchBox.module';
import ProductList from '../productResults.module/productResults.module';
import ProductDetails from '../productDetails/productDetail.module';
import fetchSearchResults from '../../services/searchProductService';
import { SearchResultDto } from '../../models/SearchResultDto';
import Breadcrumb from '../breadcrumb/breadcrumb.module';

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
    <Router>
      <SearchBox onSearch={handleSearch} />
      {searchResults && <Breadcrumb categories={searchResults.categories} />}
      <Routes>
        <Route path="/" element={searchResults && <ProductList products={searchResults.items} />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default ParentComponent;
