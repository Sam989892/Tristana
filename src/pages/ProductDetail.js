import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/products/RelatedProducts';

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageGallery = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props => props.active ? 1 : 0.6};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.accent};
  margin: 1rem 0;
`;

const SizeSelector = styled.div`
  margin: 1rem 0;

  button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${props => props.theme.text};
    background: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: ${props => props.theme.accent};
      color: white;
      border-color: ${props => props.theme.accent};
    }
  }
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.accent};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 2rem;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - replace with actual API call
  const product = {
    id,
    name: "Classic T-Shirt",
    price: 29.99,
    description: "Premium cotton t-shirt with a comfortable fit.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/image1.jpg",
      "/image2.jpg",
      "/image3.jpg",
      "/image4.jpg"
    ]
  };

  return (
    <>
      <ProductContainer>
        <ImageGallery>
          <MainImage src={product.images[selectedImage]} alt={product.name} />
          <ThumbnailContainer>
            {product.images.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`${product.name} view ${index + 1}`}
                active={selectedImage === index}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </ThumbnailContainer>
        </ImageGallery>

        <ProductInfo>
          <h1>{product.name}</h1>
          <Price>${product.price}</Price>
          <p>{product.description}</p>

          <SizeSelector>
            <h3>Select Size</h3>
            {product.sizes.map(size => (
              <button
                key={size}
                className={selectedSize === size ? 'active' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </SizeSelector>

          <AddToCartButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!selectedSize}
          >
            Add to Cart
          </AddToCartButton>
        </ProductInfo>
      </ProductContainer>
      
      <RelatedProducts 
        currentProductId={id}
        categoryProducts={[
          // Mock data - replace with actual API data
          {
            id: 1,
            name: "Similar Product 1",
            price: 29.99,
            image: "/similar1.jpg"
          },
          // ... more products
        ]}
      />
    </>
  );
};

export default ProductDetail;
