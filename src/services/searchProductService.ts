import { SearchResultDto } from "../models/SearchResultDto";

  
  const fetchSearchResults = async (query: string): Promise<SearchResultDto> => {
    const response = await fetch(`http://localhost:3001/api/items?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
export const fetchProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`http://localhost:3001/api/items/${productId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.item;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

  export default fetchSearchResults;