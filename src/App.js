import { useState } from 'react';
import './App.css';
import foodsJson from './foods.json';

import { Button, Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(true);

  const foodToDisplay = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleDeleteFood = (name) => {
    const foodsToKeep = foods.filter((food) => food.name !== name);
    setFoods(foodsToKeep);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button onClick={() => setShowForm(!showForm)}>
        {' '}
        {showForm ? 'Hide Form' : 'Add New Food'}{' '}
      </Button>
      {showForm && <AddFoodForm setFoods={setFoods} />}
      {/* Display Search component here */}
      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodToDisplay.length > 0 ? (
          foodToDisplay.map((food) => {
            // console.log(food);
            return (
              <FoodBox
                key={food.image}
                {...food}
                handleDeleteFood={handleDeleteFood}
              />
            );
          })
        ) : (
          <p>No food :/</p>
        )}
      </Row>
    </div>
  );
}

export default App;
