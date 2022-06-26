import React from 'react';
import { Col, Card, Button } from 'antd';

function FoodBox({ name, calories, image, servings, handleDeleteFood }) {
  // console.log(props);
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button onClick={() => handleDeleteFood(name)} type="primary">
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
