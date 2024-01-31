import React from 'react';
import styles from './productResults.module.scss';
import ipodImage from '../../assets/images/Logo_ML.png';
import { SearchResult } from '../../models/SearchResultDto';

interface ProductListProps {
  products: SearchResult[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className={styles.productList}>
      {products.map((product, index) => (
        <article key={index} className={styles.product}>
          <div className={styles.productImageContainer}>
            <img src={product.picture || ipodImage} alt={product.title} className={styles.productImage} />
          </div>
          <div className={styles.productDetails}> {/* Nuevo contenedor para detalles del producto */}
            <p className={styles.priceTag}>{'$  ' + product.price.amount}</p>
            <p className={styles.pdescripcion}>{product.title}</p>
          </div>
          <p className={styles.plocation}>Capital Federal</p> {/* Ubicación alineada al inicio */}
        </article>
      ))}
    </section>
  );
};

export default ProductList;