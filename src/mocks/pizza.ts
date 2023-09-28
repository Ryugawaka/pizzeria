export const data: PizzaCardProps[] = [
  {
    name: "Итальянская",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    prices: [699, 799, 899],
    img: "./images/pizza.png",
    filters: ["spicy"],
  },
  {
    name: "Маргарита",
    description: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    prices: [699, 799, 899],
    img: "./images/02.png",
    filters: ["meat"],
  },
  {
    name: "Барбекю",
    description: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    prices: [699, 799, 899],
    img: "./images/03.png",
    filters: ["vegan"],
  },
  {
    name: "Мясная",
    description: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    prices: [699, 799, 899],
    img: "./images/04.png",
    filters: ["cheese"],
  },
  {
    name: "Овощная",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    prices: [699, 799, 899],
    img: "./images/05.png",
    filters: ["spicy"],
  },
  {
    name: "Вегетарианская",
    description: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    prices: [699, 799, 899],
    img: "./images/06.png",
    filters: ["vegan"],
  },
  {
    name: "Римская",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    prices: [699, 799, 899],
    img: "./images/07.png",
    filters: ["spicy"],
  },
  {
    name: "С грибами",
    description: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    prices: [699, 799, 899],
    img: "./images/08.png",
    filters: ["spicy"],
  },
  {
    name: "Сырная",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    prices: [699, 799, 899],
    img: "./images/09.png",
    filters: ["cheese"],
  },
  {
    name: "Четыре сыра",
    description: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    prices: [699, 799, 899],
    img: "./images/10.png",
    filters: ["cheese"],
  },
  {
    name: "Пепперони Фреш с томатами",
    description: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    prices: [699, 799, 899],
    img: "./images/11.png",
    filters: ["meat"],
  },
  {
    name: "Ветчина и сыр",
    description: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    prices: [699, 799, 899],
    img: "./images/12.png",
    filters: ["meat"],
  },
];

export type PizzaCardProps = {
  name: string;
  description: string;
  prices: number[];
  img: string;
  filters: string[];
};

type PromotionType = {
  img: string;
  title: string;
  description: string;
};

export const promotions: PromotionType[] = [
  {
    img: "./images/promotion.png",
    title: "Закажи 2 пиццы – 3-я в подарок",
    description: "При заказе 2-х больших пицц – средняя пицца в подарок",
  },
  {
    img: "./images/promotion2.png",
    title: "Напиток в подарок",
    description: "Скидка на заказ от 3 000 рублей + напиток в подарок",
  },
  {
    img: "./images/promotion3.png",
    title: "25% при первом заказе",
    description: "Скидка новым клиентам!",
  },
];
