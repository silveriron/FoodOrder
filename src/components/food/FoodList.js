import FoodItem from "./FoodItem";
import style from "./FoodList.module.css";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const FoodList = (props) => {
  const [foods, setFoods] = useState([]);
  const { fetchApi } = useHttp();

  const CreateFoods = (data) => {
    const foods = [];

    for (const key in data) {
      foods.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }

    setFoods(foods);
  };

  useEffect(() => {
    fetchApi(
      {
        url: "https://food-order-420fb-default-rtdb.firebaseio.com/foods.json",
      },
      CreateFoods
    );
  }, [fetchApi]);

  const foodList = foods.map((food) => {
    return <FoodItem key={food.id} food={food} />;
  });
  return <div className={style.foodList}>{foodList}</div>;
};

export default FoodList;
