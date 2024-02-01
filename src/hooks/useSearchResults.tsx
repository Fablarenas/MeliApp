import React, { useState } from "react";
import { SearchResultDto } from "../models/SearchResultDto";
import fetchSearchResults from "../services/searchProductService";

export const useSearchResult = () => {
    const [searchResults, setSearchResults] = useState<SearchResultDto | null>(null);
  
    const handleSearch = async (query: string) => {
      try {
        const results = await fetchSearchResults(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    return [searchResults,handleSearch]
} 