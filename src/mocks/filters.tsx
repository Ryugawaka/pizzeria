import FilterAll from "../assets/svg/FilterAll";
import FilterCheese from "../assets/svg/FilterCheese";
import FilterMeat from "../assets/svg/FilterMeat";
import FilterSpicy from "../assets/svg/FilterSpicy";
import FilterVegan from "../assets/svg/FilterVegan";

export const filters = [
  {
    type: "all",
    name: "Все",
    logo: <FilterAll />,
  },
  {
    type: "spicy",
    name: "острые",
    logo: <FilterSpicy />,
  },
  {
    type: "meat",
    name: "мясные",
    logo: <FilterMeat />,
  },
  {
    type: "cheese",
    name: "сырные",
    logo: <FilterCheese />,
  },
  {
    type: "vegan",
    name: "веганские",
    logo: <FilterVegan />,
  },
];
