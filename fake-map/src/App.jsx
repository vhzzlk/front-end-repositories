import { useEffect, useState } from 'react';
import Card from './components/card';
import Pokecard from './components/pokecard';
import './index.css';

export default function App() {
  const [data, setData] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(product => setProduct(product));
  }, []);

  return (
    <>
      {data && (
        <Pokecard
          name={data.name}
          image={data.sprites.front_default}
          type={data.types[0].type.name}
        />
      )}

      {product && (
        <Card
          src={product.image}
          title={product.title}
          description={product.description}
          alt={product.title}
          price={`$${product.price}`}
          category={product.category}
        />
      )}
      
    </>
  );
}
