import React, { useState } from "react";
import Logo from "./components/logo/logo";
import Adding from "./components/adding/adding";
import ListItem from "./components/item-list/list-item";
import Stats from "./components/stats/stats";
import "./main.css";

export default function App() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(0);
  const [itemlist, setItemlist] = useState([]);
  const [check, setCheck] = useState();
  const [sort, setSort] = useState("input");

  return (
    <div>
      <Logo />
      <Adding input={input} setInput={setInput} select={select} setSelect={setSelect} itemlist={itemlist} setItemlist={setItemlist} />
      <ListItem itemlist={itemlist} check={check} setCheck={setCheck} setItemlist={setItemlist} sort={sort} setSort={setSort} />
      <Stats itemlist={itemlist} />
    </div>
  );
}
