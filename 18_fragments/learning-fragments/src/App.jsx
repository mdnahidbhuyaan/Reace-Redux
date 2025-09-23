/* eslint-disable no-unused-vars */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems';
import ErrorMassage from './components/ErrorMassage';
import './App.css'
const App = () => {



  // let foodItems = [];
  let foodItems = ["sabzi","Green vegitables","Roti","Slalt","Milk","Ghee"];



  return (
    <>
    <h1 className='food-heading'>Healthy Food</h1>
    <ErrorMassage items={foodItems}></ErrorMassage>
     <FoodItems items={foodItems}></FoodItems>
    </>
  )
}

export default App
