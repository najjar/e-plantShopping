import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  {
    name: 'Snake Plant',
    price: 15.99,
    description: 'Low maintenance, air-purifying plant perfect for indoors.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400',
    category: 'Aromatic Fragrant Plants',
  },
  {
    name: 'Peace Lily',
    price: 18.99,
    description: 'Elegant white flowers, great for low-light spaces.',
    image: 'https://images.unsplash.com/photo-1616690248057-8d8c26d67b2f?w=400',
    category: 'Aromatic Fragrant Plants',
  },
  {
    name: 'Pothos',
    price: 12.99,
    description: 'Trailing vines, incredibly easy to grow anywhere.',
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400',
    category: 'Insect Repellent Plants',
  },
  {
    name: 'Spider Plant',
    price: 10.99,
    description: 'Fast-growing, produces baby plants, non-toxic to pets.',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400',
    category: 'Insect Repellent Plants',
  },
  {
    name: 'Fiddle Leaf Fig',
    price: 34.99,
    description: 'Stunning large leaves, a statement piece for any room.',
    image: 'https://images.unsplash.com/photo-1545239351-cefa43af60f3?w=400',
    category: 'Medicinal Plants',
  },
  {
    name: 'Aloe Vera',
    price: 9.99,
    description: 'Medicinal succulent, soothing gel for skin care.',
    image: 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=400',
    category: 'Medicinal Plants',
  },
];

const categories = [...new Set(plants.map(p => p.category))];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (name) => cartItems.some(item => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#52796f', marginBottom: '16px', fontSize: '1.4rem', borderBottom: '2px solid #b7e4c7', paddingBottom: '8px' }}>
            {category}
          </h3>
          <div className="product-grid">
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.name} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', marginBottom: '12px' }}>
                  ${plant.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.name)}
                  style={isInCart(plant.name) ? { background: '#95d5b2', cursor: 'not-allowed' } : {}}
                >
                  {isInCart(plant.name) ? 'Added to Cart ✓' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
