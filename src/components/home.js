import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addfooditem } from "../foodReducer";
import { selectCartCount } from "../foodReducer";
import './Images/th.jpeg'


function Home() {
  const foods = useSelector((state) => state.food.foodList);
  const cartCount = useSelector((state) => state.food.cart.length);
  const Ingredient = useSelector((state) => state.food.ingredientsList);

  console.log("Ingredient",Ingredient)

  const dispatch = useDispatch();

  const handleaddtocart=(foodid)=>{
  
    console.log(selectCartCount(foodid));
    dispatch(addfooditem(foodid))
  }

  return (
    <>
      {/* ---------------------------------------------------------------    NAVBAR   ------------------------------------------------------------ */}
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            Navbar with text
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Signed in as:{" "}
              <a className="text-white" href="#login">
              Cart: {cartCount} items
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ---------------------------------------------------------------    Home Page   ------------------------------------------------------------ */}
      <div className="d-flex container mt-5">
        {foods.map((food, index) => (
          <div className="mx-2 " key={index}>
            <Card style={{ width: "18rem" }}>
            <div class="small-container">
              <Card.Img className="fit-image" variant="top" src={food.img} />
              </div>
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.type}</Card.Text>
                <Card.Text>{food.calories}</Card.Text>
                <Button variant="primary" onClick={()=>handleaddtocart(food.id)}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
export default Home;

