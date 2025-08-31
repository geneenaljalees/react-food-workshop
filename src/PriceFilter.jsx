
const PriceFilter = ({
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
}) => {
  return (
      <form>
        <fieldset>
          <legend>Price</legend>
          <label>
            Min price
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={minPrice}
              onChange={handleMinPriceChange}
            ></input>
          </label>
          <label>
            Max price
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            ></input>
          </label>
        </fieldset>
      </form>
  );
};

export default PriceFilter;