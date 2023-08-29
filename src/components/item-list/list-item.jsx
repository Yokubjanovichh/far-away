import React from "react";
import Item from "../item/item";
import style from "./style.module.scss";

export default function ListItem({ itemlist, setItemlist, check, setCheck, sort, setSort }) {
  let sortedItems;
  if (sort === "input") sortedItems = itemlist;
  if (sort === "description") sortedItems = itemlist.slice().sort((a, b) => a.text.localeCompare(b.text));
  if (sort === "packed") sortedItems = itemlist.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  const handleClearList = () => {
    setItemlist([]);
  };
  return (
    <div className={style.container}>
      <div className={style.itemList}>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} check={check} setCheck={setCheck} itemlist={itemlist} setItemlist={setItemlist} />
        ))}
      </div>
      <div className={style.sortAndClear}>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by descrption</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
