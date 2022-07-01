import FoodList from "./components/food/FoodList";
import FoodSummary from "./components/layout/FoodSummary";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <>
      <Header />
      <FoodSummary />
      <FoodList />
    </>
  );
};

export default App;
