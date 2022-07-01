import FoodItem from "./FoodItem";
import style from "./FoodList.module.css";
import DUMMY_MEALS from "../../dummy-food";

const FoodList = (props) => {
  const foodList = DUMMY_MEALS.map((food) => {
    return <FoodItem key={food.id} food={food} />;
  });
  return <div className={style.foodList}>{foodList}</div>;
};

export default FoodList;
