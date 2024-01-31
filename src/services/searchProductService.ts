import { SearchResultDto } from "../models/SearchResultDto";

  
  const fetchSearchResults = async (query: string): Promise<SearchResultDto> => {
    const response = await fetch(`http://localhost:3001/api/items?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export default fetchSearchResults;