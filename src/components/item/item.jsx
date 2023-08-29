import React from "react";
import style from "./style.module.scss";

export default function Item({ item, itemlist, setItemlist }) {
  const handleCheckboxChange = () => {
    console.log(item.id);
    const upgradeCheckbox = itemlist.map((elem) => {
      if (item.id === elem.id) {
        return { ...elem, packed: !elem.packed };
      }
      return elem; // O'zgarmagan elementlarni ham qaytarish kerak
    });
    setItemlist(upgradeCheckbox);
  };
  const handleDelete = () => {
    const upgradeItemList = itemlist.filter((i) => i.id !== item.id);
    setItemlist(upgradeItemList);
  };
  return (
    <div className={style.item}>
      <input type="checkbox" onChange={handleCheckboxChange} />
      <p style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.number} {item.text}
      </p>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
}
