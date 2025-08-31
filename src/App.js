import dishes from './data';
import { useState } from 'react';
import PriceFilter from './PriceFilter';
import DishList from './DishList';
import CategoryFilter from './CategoryFilter';

const categories = [
  'all',
  'burger',
  'hot dog',
  'sandwich',
  'fries',
  'topping',
  'drink',
  'extra',
];

function App() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectCategory, setSelectCategory] = useState('all');

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };
  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };
  const handleCategoryChange = (event) => {
    setSelectCategory(event.target.value);
  };

  return (
		<main>
			<section className="filters">
      <h1>Burger Place</h1>
      <h2>Filters</h2>
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleMinPriceChange={handleMinPriceChange}
        handleMaxPriceChange={handleMaxPriceChange}
      />
      <CategoryFilter
        categories={categories}
        selectCategory={selectCategory}
        handleCategoryChange={handleCategoryChange}
				/>
			</section>
      <DishList
        dishes={dishes}
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectCategory={selectCategory}
      />
    </main>
  );
}

export default App;
