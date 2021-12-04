import React from "react";

import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => (
  // console.log(props);
  // return <div>Hello</div>;?
  <div className="card-list">
    {props.monsters.map((mov) => (
      <Card key={mov.id} mov={mov} />
    ))}
  </div>
);
