import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  // console.log(props);
  // return <div>Hello</div>;?
  return (
    <div className="card-list">
      {props.monsters.map((mov) => (
        <Card key={mov.id} mov={mov} />
      ))}
    </div>
  );
};
