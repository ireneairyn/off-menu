import React, { useState } from 'react';

function Form() {
  const [starter, setStarter] = useState('');
  const [mainCourse, setMainCourse] = useState('');
  const [dessert, setDessert] = useState('');
  const [sideDish, setSideDish] = useState('');
  const [drink, setDrink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Starter:
        <input type="text" value={starter} onChange={(e) => setStarter(e.target.value)} />
      </label>
      <label>
        Main Course:
        <input type="text" value={mainCourse} onChange={(e) => setMainCourse(e.target.value)} />
      </label>
      <label>
        Dessert:
        <input type="text" value={dessert} onChange={(e) => setDessert(e.target.value)} />
      </label>
      <label>
        Side Dish:
        <input type="text" value={sideDish} onChange={(e) => setSideDish(e.target.value)} />
      </label>
      <label>
        Drink:
        <input type="text" value={drink} onChange={(e) => setDrink(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
