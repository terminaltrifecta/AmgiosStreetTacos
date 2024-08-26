import React from "react";
import { Accordion, Button, ListGroup } from "react-bootstrap";

interface AccordionMenuProps {
  acchdr1: string;
  acchdr2: string;
  acchdr3: string;
  acchdr4: string;
  acchdr5: string;
  acchdr6: string;
  acchdr7: string;
  addToCart: (item: { name: string; price: number }) => void;
}

function AccordionMenuOrder({
  acchdr1,
  acchdr2,
  acchdr3,
  acchdr4,
  acchdr5,
  acchdr6,
  acchdr7,
  addToCart,
}: AccordionMenuProps) {
  const menuItems = [
    {
      header: acchdr1,
      items: [
        {
          name: "Chorizo, Egg, Cheese, and Veggie Burrito (Contains Pork)",
          price: 5.99,
        },
        { name: "Bacon, Egg, Cheddar, and Hash Brown Burrito", price: 6.49 },
        { name: "3 Eggs, Carne Asada, Pico, and Cheese Burrito", price: 7.49 },
        {
          name: "Two Tacos, Egg, Chorizo, Queso, Beans and Cilantro (Tacos, Pork)",
          price: 8.99,
        },
        { name: "Huevos Rancheros, 3 Eggs, Veggies (Tacos)", price: 7.99 },
      ],
    },
    {
      header: acchdr2,
      items: [
        { name: "Grilled Chicken", price: 10.99 },
        { name: "Grilled Vegetables", price: 8.99 },
        { name: "Chicken Mole", price: 12.49 },
        { name: "Carne Asada", price: 13.99 },
        { name: "Chicken Fajitas", price: 11.99 },
      ],
    },
    {
      header: acchdr3,
      items: [
        { name: "Chicken Quesadilla", price: 9.99 },
        { name: "California Quesadilla", price: 10.49 },
        { name: "BBQ Chicken Quesadilla", price: 10.99 },
      ],
    },
    {
      header: acchdr4,
      items: [
        { name: "California", price: 9.99 },
        { name: "Chicken Fajitas", price: 11.99 },
        { name: "Chicken Mole", price: 12.49 },
        { name: "Grilled Vegetables", price: 8.99 },
        { name: "Carne Asada", price: 13.99 },
        { name: "Beef & Cheese", price: 10.49 },
      ],
    },
    {
      header: acchdr5,
      items: [
        { name: "Chicken", price: 9.99 },
        { name: "Carne Asada", price: 13.99 },
        { name: "Ground Beef", price: 8.99 },
        { name: "Carnitas (Pork)", price: 12.49 },
        { name: "Suadero (Beef Steak)", price: 13.99 },
        { name: "Chorizo (Pork)", price: 11.49 },
      ],
    },
    {
      header: acchdr6,
      items: [
        { name: "Meatlovers Taco", price: 10.99 },
        { name: "Taco Ranchero", price: 9.49 },
        { name: "Taco Loco", price: 9.99 },
        { name: "Veggie Taco", price: 7.99 },
        { name: "Taco Campechano", price: 10.49 },
        { name: "Quesadilla Rachera", price: 11.49 },
      ],
    },
    {
      header: acchdr7,
      items: [
        { name: "Shrimp Tostada", price: 3.75 },
        { name: "Shrimp Tacos", price: 12.0 },
        { name: "Birria Tacos", price: 12.0 },
        { name: "Asada Fries", price: 13.0 },
        { name: "Taco Salad", price: 10.0 },
        { name: "Chicken Enchiladas", price: 12.0 },
        { name: "Combo Dinner", price: 12.0 },
        { name: "Tamales Dinner", price: 12.0 },
        { name: "Taco Dinner", price: 12.0 },
        { name: "Choriqueso", price: 10.0 },
        { name: "Crunch Wrap", price: 13.5 },
        { name: "Chicken Tostada", price: 3.5 },
        { name: "Tamales (Sold Individually, Pork or Chicken)", price: 2.5 },
        { name: "Nachos Supreme", price: 13.0 },
        { name: "Mangonada", price: 5.75 },
        { name: "Spicy Street Corn (With Hot Cheetos)", price: 5.5 },
        { name: "Street Corn", price: 4.0 },
        { name: "Torta With French Fries", price: 12.0 },
        { name: "Steak Fajitas Tacos", price: 12.0 },
        { name: "Cajun Dinner", price: 12.0 },
        { name: "Chicken Tenders with French Fries", price: 10.0 },
        { name: "Choriqueso With Chips", price: 10.0 },
        { name: "Walking Tacos", price: 8.0 },
        { name: "Asada Dinner", price: 12.0 },
        { name: "Chicken Flautas", price: 12.0 },
        { name: "Fish Tacos", price: 12.0 },
        { name: "Fish and Chips", price: 12.0 },
        { name: "Lunch Special", price: 12.0 },
        { name: "Amigos Burritos", price: 13.0 },
        { name: "Amigos Salad", price: 12.0 },
        { name: "Gorditas Dinner", price: 12.0 },
        { name: "Buffalo Burrito", price: 11.0 },
      ],
    },
  ];

  return (
    <Accordion>
      {menuItems.map((section, index) => (
        <Accordion.Item eventKey={`${index + 1}`} key={section.header}>
          <Accordion.Header>
            <h4>{section.header}</h4>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              {section.items.map((item) => (
                <ListGroup.Item
                  key={item.name}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{item.name}</span>
                  <Button variant="primary" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionMenuOrder;
