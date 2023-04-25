import React from "react";

function Menu(props) {
  const { water, poppabread, starter, mainCourse, dessert, sideDish, drink } =
    props;

  return (
    <div className="finalMenuContainer">
      <div className="finalMenu">
      <h2>Your Dream Meal</h2>
      <p>{water}</p>
      <p>{poppabread}</p>
    
      <p className="dish">~ Starter ~</p>
      <p>{starter}</p>
      <p className="dish">~ Main Course ~</p>
      <p>{mainCourse}</p>
      <p className="dish">~ Side Dish ~</p>
      <p>{sideDish}</p>
      <p className="dish">~ Drink ~</p>
      <p>{drink}</p>
      <p className="dish">~ Dessert ~</p>
      <p>{dessert}</p>
    </div>
    </div>
  );
}

export default Menu;
