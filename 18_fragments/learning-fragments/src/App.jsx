/* eslint-disable no-unused-vars */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems';
import ErrorMassage from './components/ErrorMassage';
import './App.css'
import Container from './components/Container';
const App = () => {



  // let foodItems = [];
  let foodItems = ["sabzi","Green vegitables","Roti","Slalt","Milk","Ghee"];



  return (
<>
  <Container>
  <h1 className='food-heading'>Healthy Food</h1>
  <ErrorMassage items={foodItems}></ErrorMassage>
   <FoodItems items={foodItems}></FoodItems>
   </Container>
   {/* <Container>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium facere ut fugiat explicabo accusamus odio recusandae dolor, velit harum, porro impedit amet inventore eos voluptas voluptates odit? Ducimus, nam!</p>
   </Container> */}
   </>
 
   
  )
}

export default App
