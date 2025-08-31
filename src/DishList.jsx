const DishList = ({ dishes, minPrice, maxPrice, selectCategory }) => {
  const filterDishes = dishes
    .filter((dish) => dish.price >= minPrice && dish.price <= maxPrice)
    .filter((dish) =>
      selectCategory === 'all' ? true : dish.category === selectCategory
    );

  return (
    <section className="dishes">
      <h2>Dishes</h2>
      <ul className="grid ">
        {filterDishes.map((dish) => (
          <li className="card" key={dish.id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
            <p>{dish.category}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DishList;
