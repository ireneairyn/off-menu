import React from 'react';

function Image(props) {
  const { starter, mainCourse, dessert, sideDish, drink } = props;

  return (
    <div>
      <h2>Your Meal:</h2>
      <p>Starter: {starter}</p>
      <p>Main Course: {mainCourse}</p>
      <p>Dessert: {dessert}</p>
      <p>Side Dish: {sideDish}</p>
      <p>Drink: {drink}</p>
      <img src="https://placeimg.com/640/480/food" alt="Food" />
    </div>
  );
}

