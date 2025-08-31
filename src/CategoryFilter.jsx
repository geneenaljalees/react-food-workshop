const CategoryFilter = ({
  categories,
  selectCategory,
  handleCategoryChange,
}) => {
  return (
      <form>
        <fieldset>
          <legend>Category</legend>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="radio"
                value={category}
                checked={selectCategory === category}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          ))}
        </fieldset>
      </form>
  );
};

export default CategoryFilter;