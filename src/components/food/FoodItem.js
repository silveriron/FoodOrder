import style from "./FoodItem.module.css";

const FoodItem = ({ food }) => {
  return (
    <div className={style.fooditem}>
      <div>
        <p>
          <strong>{food.name}</strong>
        </p>
        <p>
          <i>{food.description}</i>
        </p>
        <p className={style.price}>{`$${food.price}`}</p>
      </div>
      <form>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          id="amount"
        />
        <input name="id" value={food.id} type="hidden" />
        <div className={style.button}>
          <button>+ Add</button>
        </div>
      </form>
    </div>
  );
};

export default FoodItem;
