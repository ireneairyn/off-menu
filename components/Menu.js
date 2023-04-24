import React from "react";

function Menu(props) {
  const { water, poppabread, starter, mainCourse, dessert, sideDish, drink } =
    props;

  return (
    <div>
      <h2>Your Meal:</h2>
      <p>{water}</p>
      <p>{poppabread}</p>
      <p>Starter: {starter}</p>
      <p>Main Course: {mainCourse}</p>
      <p>Side Dish: {sideDish}</p>
      <p>Drink: {drink}</p>
      <p>Dessert: {dessert}</p>
    </div>
  );
}

export default Menu;
