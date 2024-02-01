import { Author, Price } from "./SearchResultDto";

export interface ProductDetailDto {
    author: Author;
    item: ProductDetail;
  }


export interface ProductDetail {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  }
  