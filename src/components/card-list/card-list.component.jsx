import React from "react";

import { Card } from "../card/card.component";

import "./card-list.style.css";

export const CardList = (props) => {
  // console.log(props.name)
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card
          key={monster.id}
          monster={monster}
        /> /* Childern in props are which we pass between <></> and to call that we use props.children */
      ))}
    </div>
  );
};
