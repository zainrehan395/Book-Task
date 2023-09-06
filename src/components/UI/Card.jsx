import React from "react";
import classes from "./Card.module.css";
function Card(props) {
  return (
    <div className={classes.card}>
      <ul>
        <h3>Book's Title: {props.title}</h3>
        <img src={props.image} alt="books-image" />
        <p>Book's ID: {props.id}</p>
        <p>Book's Author: {props.author}</p>
        <p>Book's Description: {props.description}</p>
      </ul>
    </div>
  );
}

export default Card;
