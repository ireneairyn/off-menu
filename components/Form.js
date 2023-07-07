import Link from "next/link";
import React, { useState } from "react";

function Form() {
  const [water, setWater] = useState("");
  const [poppabread, setPoppabread] = useState("");
  const [starter, setStarter] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [dessert, setDessert] = useState("");
  const [sideDish, setSideDish] = useState("");
  const [drink, setDrink] = useState("");

  return (
    <div className="form">
      <label>
        🍶 Tap, still or sparking water?
        <input
          type="text"
          name="water"
          value={water}
          onChange={(e) => setWater(e.target.value)}
        />
      </label>
      <label>
        🫓 Poppadoms or bread?
        <input
          type="text"
          name="poppabread"
          value={poppabread}
          onChange={(e) => setPoppabread(e.target.value)}
        />
      </label>
      <label>
        🧆 Dream starter?
        <input
          type="text"
          name="starter"
          value={starter}
          onChange={(e) => setStarter(e.target.value)}
        />
      </label>
      <label>
        🍲 Main course?
        <input
          type="text"
          name="mainCourse"
          value={mainCourse}
          onChange={(e) => setMainCourse(e.target.value)}
        />
      </label>
      <label>
        🥙 Side dish?
        <input
          type="text"
          name="sideDish"
          value={sideDish}
          onChange={(e) => setSideDish(e.target.value)}
        />
      </label>
      <label>
        🍹 Drink?
        <input
          type="text"
          name="drink"
          value={drink}
          onChange={(e) => setDrink(e.target.value)}
        />
      </label>
      <label>
        🍰 Dessert?
        <input
          type="text"
          name="dessert"
          value={dessert}
          onChange={(e) => setDessert(e.target.value)}
        />
      </label>
      <div className="buttonContainer">
        <Link
          href={{
            pathname: "/menu",
            query: {
              water,
              poppabread,
              starter,
              mainCourse,
              sideDish,
              drink,
              dessert,
            },
          }}
        >
          <button type="submit">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
