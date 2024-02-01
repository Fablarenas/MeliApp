export interface SearchResultDto {
    author: Author;
    items: SearchResult[];
    categories:string[]
  }
  export interface SearchResult {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
  }
  export interface Author {
    name: string;
    lastName: string;
  }
  export interface Price {
    currency: string;
    amount: number;
    decimals: number;
  }