import { Divider, Input } from 'antd';
import { useState, useEffect } from 'react';
// Iteration 4
function AddFoodForm(props) {
  const [values, setValues] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  useEffect(() => {
    console.log('Form is alive !');
    return () => console.log('Form is dead 👀');
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFoods((hugo) => [...hugo, values]);
    // props.setFoods([...props.foods, values])
    // console.log([values]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={values.name}
        type="text"
        name="name"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Image</label>
      <Input
        value={values.image}
        type="text"
        name="image"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input
        value={values.calories}
        type="number"
        name="calories"
        min={0}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input
        value={values.servings}
        type="number"
        name="servings"
        min={0}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
