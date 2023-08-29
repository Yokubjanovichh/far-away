import React from "react";
import style from "./style.module.scss";

export default function Stats({ itemlist }) {
  const itemsLength = itemlist.length;
  const peckedItems = itemlist.filter((item) => item.packed).length;
  const persentage = Math.round((peckedItems / itemsLength) * 100);
  if (!itemsLength) {
    return (
      <div className={style.stats}>
        <p>
          <em>Start add some items to your packing list🚀</em>
        </p>
      </div>
    );
  }
  return (
    <div className={style.stats}>
      <p>
        <em>{persentage === 100 ? "You got everything! Ready to go ✈️" : `🧳 You have ${itemsLength} items on your list, and you already pecked ${peckedItems}(${persentage}%)`}</em>
      </p>
    </div>
  );
}
