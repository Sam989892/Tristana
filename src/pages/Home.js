import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProductCarousel from '../components/home/ProductCarousel';

const Home = () => {
  const bestsellers = [
    // Mock data - replace with actual API data
    {
      id: 1,
      name: "Bestseller 1",
      price: 29.99,
      image: "/bestseller1.jpg"
    },
    // ... more products
  ];

  return (
    <>
      <Hero />
      <FeaturedCategories />
      <ProductCarousel products={bestsellers} />
    </>
  );
};

export default Home;
