import React from "react";
import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected, children:renderItem } = props;

  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  const itemList = renderItems(data);

  return <ul className="item-list list-group">{itemList}</ul>;
};

export default ItemList;
