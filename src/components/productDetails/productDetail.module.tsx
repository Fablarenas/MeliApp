import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './productDetail.module.css';
import { ProductDetail } from '../../models/ProductDetailDto';
import { fetchProductDetails } from '../../services/searchProductService';


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId)
        .then(setProduct)
        .catch((error:any) => console.error("Error fetching product details:", error));
    }
  }, [productId]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className={styles.productDetail}>
      <div className={styles.containermain}>
      <div className={styles.imageContainer}>
        <img src={product.picture} alt={product.picture} className={styles.productImage} />
      </div>
      <div className={styles.productContent}>
      <p className={styles.productStatus}>{product.condition === 'new' ? 'Nuevo' : 'Segunda mano'} - {product.sold_quantity} vendidos</p>
        <p className={styles.productTitle}>{product.title}</p>
        <p className={styles.productPrice}>
        $ {product.price.amount}
        <span className={styles.productPriceCents}>{product.price.decimals}</span>
      </p>
        <button className={styles.buyButton}>Comprar</button>
      </div>
      </div>
      <div className={styles.containerdescription}>
      <div className={styles.productDescription}>
          <p className={styles.productDescriptionTitle}>Descripción del producto</p>
          <p className={styles.productDescriptionText}>{product.description}</p>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
